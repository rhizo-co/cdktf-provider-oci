# `dataOciIdentityTagStandardTagNamespaceTemplates` Submodule <a name="`dataOciIdentityTagStandardTagNamespaceTemplates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates oci_identity_tag_standard_tag_namespace_templates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplates(Construct Scope, string Id, DataOciIdentityTagStandardTagNamespaceTemplatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig">DataOciIdentityTagStandardTagNamespaceTemplatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig">DataOciIdentityTagStandardTagNamespaceTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityTagStandardTagNamespaceTemplates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityTagStandardTagNamespaceTemplates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityTagStandardTagNamespaceTemplates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciIdentityTagStandardTagNamespaceTemplates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityTagStandardTagNamespaceTemplates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityTagStandardTagNamespaceTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityTagStandardTagNamespaceTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList">DataOciIdentityTagStandardTagNamespaceTemplatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.standardTagNamespaceTemplates">StandardTagNamespaceTemplates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filter"></a>

```csharp
public DataOciIdentityTagStandardTagNamespaceTemplatesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList">DataOciIdentityTagStandardTagNamespaceTemplatesFilterList</a>

---

##### `StandardTagNamespaceTemplates`<sup>Required</sup> <a name="StandardTagNamespaceTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.standardTagNamespaceTemplates"></a>

```csharp
public DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList StandardTagNamespaceTemplates { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplatesConfig <a name="DataOciIdentityTagStandardTagNamespaceTemplatesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#compartment_id DataOciIdentityTagStandardTagNamespaceTemplates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#id DataOciIdentityTagStandardTagNamespaceTemplates#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#compartment_id DataOciIdentityTagStandardTagNamespaceTemplates#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#filter DataOciIdentityTagStandardTagNamespaceTemplates#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#id DataOciIdentityTagStandardTagNamespaceTemplates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityTagStandardTagNamespaceTemplatesFilter <a name="DataOciIdentityTagStandardTagNamespaceTemplatesFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#name DataOciIdentityTagStandardTagNamespaceTemplates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#values DataOciIdentityTagStandardTagNamespaceTemplates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#regex DataOciIdentityTagStandardTagNamespaceTemplates#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#name DataOciIdentityTagStandardTagNamespaceTemplates#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#values DataOciIdentityTagStandardTagNamespaceTemplates#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_templates#regex DataOciIdentityTagStandardTagNamespaceTemplates#regex}.

---

### DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityTagStandardTagNamespaceTemplatesFilterList <a name="DataOciIdentityTagStandardTagNamespaceTemplatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.get"></a>

```csharp
private DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList <a name="DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.get"></a>

```csharp
private DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.standardTagNamespaceName">StandardTagNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `StandardTagNamespaceName`<sup>Required</sup> <a name="StandardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.standardTagNamespaceName"></a>

```csharp
public string StandardTagNamespaceName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplatesOutputReference.property.internalValue"></a>

```csharp
public DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplates.DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates">DataOciIdentityTagStandardTagNamespaceTemplatesStandardTagNamespaceTemplates</a>

---



