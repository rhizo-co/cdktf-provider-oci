# `dataOciOdaOdaInstance` Submodule <a name="`dataOciOdaOdaInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOdaOdaInstance <a name="DataOciOdaOdaInstance" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_instance oci_oda_oda_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOdaOdaInstance(Construct Scope, string Id, DataOciOdaOdaInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig">DataOciOdaOdaInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig">DataOciOdaOdaInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOdaOdaInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOdaOdaInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOdaOdaInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOdaOdaInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOdaOdaInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOdaOdaInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOdaOdaInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOdaOdaInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOdaOdaInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.attachmentIds">AttachmentIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.attachmentTypes">AttachmentTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.connectorUrl">ConnectorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.identityAppConsoleUrl">IdentityAppConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.identityAppGuid">IdentityAppGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.identityDomain">IdentityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.importedPackageIds">ImportedPackageIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.importedPackageNames">ImportedPackageNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.isRoleBasedAccess">IsRoleBasedAccess</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.lifecycleSubState">LifecycleSubState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.restrictedOperations">RestrictedOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList">DataOciOdaOdaInstanceRestrictedOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.shapeName">ShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.webAppUrl">WebAppUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.odaInstanceIdInput">OdaInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.odaInstanceId">OdaInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AttachmentIds`<sup>Required</sup> <a name="AttachmentIds" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.attachmentIds"></a>

```csharp
public string[] AttachmentIds { get; }
```

- *Type:* string[]

---

##### `AttachmentTypes`<sup>Required</sup> <a name="AttachmentTypes" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.attachmentTypes"></a>

```csharp
public string[] AttachmentTypes { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectorUrl`<sup>Required</sup> <a name="ConnectorUrl" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.connectorUrl"></a>

```csharp
public string ConnectorUrl { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityAppConsoleUrl`<sup>Required</sup> <a name="IdentityAppConsoleUrl" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.identityAppConsoleUrl"></a>

```csharp
public string IdentityAppConsoleUrl { get; }
```

- *Type:* string

---

##### `IdentityAppGuid`<sup>Required</sup> <a name="IdentityAppGuid" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.identityAppGuid"></a>

```csharp
public string IdentityAppGuid { get; }
```

- *Type:* string

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.identityDomain"></a>

```csharp
public string IdentityDomain { get; }
```

- *Type:* string

---

##### `ImportedPackageIds`<sup>Required</sup> <a name="ImportedPackageIds" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.importedPackageIds"></a>

```csharp
public string[] ImportedPackageIds { get; }
```

- *Type:* string[]

---

##### `ImportedPackageNames`<sup>Required</sup> <a name="ImportedPackageNames" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.importedPackageNames"></a>

```csharp
public string[] ImportedPackageNames { get; }
```

- *Type:* string[]

---

##### `IsRoleBasedAccess`<sup>Required</sup> <a name="IsRoleBasedAccess" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.isRoleBasedAccess"></a>

```csharp
public IResolvable IsRoleBasedAccess { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.lifecycleSubState"></a>

```csharp
public string LifecycleSubState { get; }
```

- *Type:* string

---

##### `RestrictedOperations`<sup>Required</sup> <a name="RestrictedOperations" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.restrictedOperations"></a>

```csharp
public DataOciOdaOdaInstanceRestrictedOperationsList RestrictedOperations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList">DataOciOdaOdaInstanceRestrictedOperationsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.shapeName"></a>

```csharp
public string ShapeName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `WebAppUrl`<sup>Required</sup> <a name="WebAppUrl" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.webAppUrl"></a>

```csharp
public string WebAppUrl { get; }
```

- *Type:* string

---

##### `OdaInstanceIdInput`<sup>Optional</sup> <a name="OdaInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.odaInstanceIdInput"></a>

```csharp
public string OdaInstanceIdInput { get; }
```

- *Type:* string

---

##### `OdaInstanceId`<sup>Required</sup> <a name="OdaInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.odaInstanceId"></a>

```csharp
public string OdaInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOdaOdaInstanceConfig <a name="DataOciOdaOdaInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOdaOdaInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string OdaInstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.odaInstanceId">OdaInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_instance#oda_instance_id DataOciOdaOdaInstance#oda_instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `OdaInstanceId`<sup>Required</sup> <a name="OdaInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceConfig.property.odaInstanceId"></a>

```csharp
public string OdaInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/oda_oda_instance#oda_instance_id DataOciOdaOdaInstance#oda_instance_id}.

---

### DataOciOdaOdaInstanceRestrictedOperations <a name="DataOciOdaOdaInstanceRestrictedOperations" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOdaOdaInstanceRestrictedOperations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOdaOdaInstanceRestrictedOperationsList <a name="DataOciOdaOdaInstanceRestrictedOperationsList" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOdaOdaInstanceRestrictedOperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.get"></a>

```csharp
private DataOciOdaOdaInstanceRestrictedOperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOdaOdaInstanceRestrictedOperationsOutputReference <a name="DataOciOdaOdaInstanceRestrictedOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOdaOdaInstanceRestrictedOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.operationName">OperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.restrictingService">RestrictingService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperations">DataOciOdaOdaInstanceRestrictedOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperationName`<sup>Required</sup> <a name="OperationName" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.operationName"></a>

```csharp
public string OperationName { get; }
```

- *Type:* string

---

##### `RestrictingService`<sup>Required</sup> <a name="RestrictingService" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.restrictingService"></a>

```csharp
public string RestrictingService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperationsOutputReference.property.internalValue"></a>

```csharp
public DataOciOdaOdaInstanceRestrictedOperations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOdaOdaInstance.DataOciOdaOdaInstanceRestrictedOperations">DataOciOdaOdaInstanceRestrictedOperations</a>

---



