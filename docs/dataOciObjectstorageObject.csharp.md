# `dataOciObjectstorageObject` Submodule <a name="`dataOciObjectstorageObject` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObject <a name="DataOciObjectstorageObject" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object oci_objectstorage_object}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObject(Construct Scope, string Id, DataOciObjectstorageObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig">DataOciObjectstorageObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig">DataOciObjectstorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent">ResetBase64EncodeContent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit">ResetContentLengthLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl">ResetHttpResponseCacheControl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition">ResetHttpResponseContentDisposition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding">ResetHttpResponseContentEncoding</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage">ResetHttpResponseContentLanguage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType">ResetHttpResponseContentType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires">ResetHttpResponseExpires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId">ResetVersionId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBase64EncodeContent` <a name="ResetBase64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetBase64EncodeContent"></a>

```csharp
private void ResetBase64EncodeContent()
```

##### `ResetContentLengthLimit` <a name="ResetContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetContentLengthLimit"></a>

```csharp
private void ResetContentLengthLimit()
```

##### `ResetHttpResponseCacheControl` <a name="ResetHttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseCacheControl"></a>

```csharp
private void ResetHttpResponseCacheControl()
```

##### `ResetHttpResponseContentDisposition` <a name="ResetHttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentDisposition"></a>

```csharp
private void ResetHttpResponseContentDisposition()
```

##### `ResetHttpResponseContentEncoding` <a name="ResetHttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentEncoding"></a>

```csharp
private void ResetHttpResponseContentEncoding()
```

##### `ResetHttpResponseContentLanguage` <a name="ResetHttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentLanguage"></a>

```csharp
private void ResetHttpResponseContentLanguage()
```

##### `ResetHttpResponseContentType` <a name="ResetHttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseContentType"></a>

```csharp
private void ResetHttpResponseContentType()
```

##### `ResetHttpResponseExpires` <a name="ResetHttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetHttpResponseExpires"></a>

```csharp
private void ResetHttpResponseExpires()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVersionId` <a name="ResetVersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObject.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObject.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciObjectstorageObject resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstorageObject to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength">ContentLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5">ContentMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier">StorageTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput">Base64EncodeContentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput">ContentLengthLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput">HttpResponseCacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput">HttpResponseContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput">HttpResponseContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput">HttpResponseContentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput">HttpResponseContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput">HttpResponseExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput">ObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit">ContentLengthLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl">HttpResponseCacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition">HttpResponseContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding">HttpResponseContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage">HttpResponseContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType">HttpResponseContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires">HttpResponseExpires</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLength"></a>

```csharp
public string ContentLength { get; }
```

- *Type:* string

---

##### `ContentMd5`<sup>Required</sup> <a name="ContentMd5" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentMd5"></a>

```csharp
public string ContentMd5 { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `StorageTier`<sup>Required</sup> <a name="StorageTier" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.storageTier"></a>

```csharp
public string StorageTier { get; }
```

- *Type:* string

---

##### `Base64EncodeContentInput`<sup>Optional</sup> <a name="Base64EncodeContentInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContentInput"></a>

```csharp
public object Base64EncodeContentInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ContentLengthLimitInput`<sup>Optional</sup> <a name="ContentLengthLimitInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimitInput"></a>

```csharp
public double ContentLengthLimitInput { get; }
```

- *Type:* double

---

##### `HttpResponseCacheControlInput`<sup>Optional</sup> <a name="HttpResponseCacheControlInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControlInput"></a>

```csharp
public string HttpResponseCacheControlInput { get; }
```

- *Type:* string

---

##### `HttpResponseContentDispositionInput`<sup>Optional</sup> <a name="HttpResponseContentDispositionInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDispositionInput"></a>

```csharp
public string HttpResponseContentDispositionInput { get; }
```

- *Type:* string

---

##### `HttpResponseContentEncodingInput`<sup>Optional</sup> <a name="HttpResponseContentEncodingInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncodingInput"></a>

```csharp
public string HttpResponseContentEncodingInput { get; }
```

- *Type:* string

---

##### `HttpResponseContentLanguageInput`<sup>Optional</sup> <a name="HttpResponseContentLanguageInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguageInput"></a>

```csharp
public string HttpResponseContentLanguageInput { get; }
```

- *Type:* string

---

##### `HttpResponseContentTypeInput`<sup>Optional</sup> <a name="HttpResponseContentTypeInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentTypeInput"></a>

```csharp
public string HttpResponseContentTypeInput { get; }
```

- *Type:* string

---

##### `HttpResponseExpiresInput`<sup>Optional</sup> <a name="HttpResponseExpiresInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpiresInput"></a>

```csharp
public string HttpResponseExpiresInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ObjectInput`<sup>Optional</sup> <a name="ObjectInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.objectInput"></a>

```csharp
public string ObjectInput { get; }
```

- *Type:* string

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `Base64EncodeContent`<sup>Required</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.base64EncodeContent"></a>

```csharp
public object Base64EncodeContent { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ContentLengthLimit`<sup>Required</sup> <a name="ContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.contentLengthLimit"></a>

```csharp
public double ContentLengthLimit { get; }
```

- *Type:* double

---

##### `HttpResponseCacheControl`<sup>Required</sup> <a name="HttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseCacheControl"></a>

```csharp
public string HttpResponseCacheControl { get; }
```

- *Type:* string

---

##### `HttpResponseContentDisposition`<sup>Required</sup> <a name="HttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentDisposition"></a>

```csharp
public string HttpResponseContentDisposition { get; }
```

- *Type:* string

---

##### `HttpResponseContentEncoding`<sup>Required</sup> <a name="HttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentEncoding"></a>

```csharp
public string HttpResponseContentEncoding { get; }
```

- *Type:* string

---

##### `HttpResponseContentLanguage`<sup>Required</sup> <a name="HttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentLanguage"></a>

```csharp
public string HttpResponseContentLanguage { get; }
```

- *Type:* string

---

##### `HttpResponseContentType`<sup>Required</sup> <a name="HttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseContentType"></a>

```csharp
public string HttpResponseContentType { get; }
```

- *Type:* string

---

##### `HttpResponseExpires`<sup>Required</sup> <a name="HttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.httpResponseExpires"></a>

```csharp
public string HttpResponseExpires { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectConfig <a name="DataOciObjectstorageObjectConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Namespace,
    string Object,
    object Base64EncodeContent = null,
    double ContentLengthLimit = null,
    string HttpResponseCacheControl = null,
    string HttpResponseContentDisposition = null,
    string HttpResponseContentEncoding = null,
    string HttpResponseContentLanguage = null,
    string HttpResponseContentType = null,
    string HttpResponseExpires = null,
    string Id = null,
    string VersionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object">Object</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent">Base64EncodeContent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit">ContentLengthLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl">HttpResponseCacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition">HttpResponseContentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding">HttpResponseContentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage">HttpResponseContentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType">HttpResponseContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires">HttpResponseExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId">VersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#bucket DataOciObjectstorageObject#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#namespace DataOciObjectstorageObject#namespace}.

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.object"></a>

```csharp
public string Object { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#object DataOciObjectstorageObject#object}.

---

##### `Base64EncodeContent`<sup>Optional</sup> <a name="Base64EncodeContent" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.base64EncodeContent"></a>

```csharp
public object Base64EncodeContent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#base64_encode_content DataOciObjectstorageObject#base64_encode_content}.

---

##### `ContentLengthLimit`<sup>Optional</sup> <a name="ContentLengthLimit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.contentLengthLimit"></a>

```csharp
public double ContentLengthLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#content_length_limit DataOciObjectstorageObject#content_length_limit}.

---

##### `HttpResponseCacheControl`<sup>Optional</sup> <a name="HttpResponseCacheControl" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseCacheControl"></a>

```csharp
public string HttpResponseCacheControl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_cache_control DataOciObjectstorageObject#http_response_cache_control}.

---

##### `HttpResponseContentDisposition`<sup>Optional</sup> <a name="HttpResponseContentDisposition" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentDisposition"></a>

```csharp
public string HttpResponseContentDisposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_disposition DataOciObjectstorageObject#http_response_content_disposition}.

---

##### `HttpResponseContentEncoding`<sup>Optional</sup> <a name="HttpResponseContentEncoding" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentEncoding"></a>

```csharp
public string HttpResponseContentEncoding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_encoding DataOciObjectstorageObject#http_response_content_encoding}.

---

##### `HttpResponseContentLanguage`<sup>Optional</sup> <a name="HttpResponseContentLanguage" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentLanguage"></a>

```csharp
public string HttpResponseContentLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_language DataOciObjectstorageObject#http_response_content_language}.

---

##### `HttpResponseContentType`<sup>Optional</sup> <a name="HttpResponseContentType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseContentType"></a>

```csharp
public string HttpResponseContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_content_type DataOciObjectstorageObject#http_response_content_type}.

---

##### `HttpResponseExpires`<sup>Optional</sup> <a name="HttpResponseExpires" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.httpResponseExpires"></a>

```csharp
public string HttpResponseExpires { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#http_response_expires DataOciObjectstorageObject#http_response_expires}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#id DataOciObjectstorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObject.DataOciObjectstorageObjectConfig.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object#version_id DataOciObjectstorageObject#version_id}.

---



