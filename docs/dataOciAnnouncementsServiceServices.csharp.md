# `dataOciAnnouncementsServiceServices` Submodule <a name="`dataOciAnnouncementsServiceServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceServices <a name="DataOciAnnouncementsServiceServices" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services oci_announcements_service_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServices(Construct Scope, string Id, DataOciAnnouncementsServiceServicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig">DataOciAnnouncementsServiceServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig">DataOciAnnouncementsServiceServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetCommsManagerName">ResetCommsManagerName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetPlatformType">ResetPlatformType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCommsManagerName` <a name="ResetCommsManagerName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetCommsManagerName"></a>

```csharp
private void ResetCommsManagerName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlatformType` <a name="ResetPlatformType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetPlatformType"></a>

```csharp
private void ResetPlatformType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciAnnouncementsServiceServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceServices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciAnnouncementsServiceServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciAnnouncementsServiceServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList">DataOciAnnouncementsServiceServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.servicesCollection">ServicesCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList">DataOciAnnouncementsServiceServicesServicesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerNameInput">CommsManagerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformTypeInput">PlatformTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerName">CommsManagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformType">PlatformType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filter"></a>

```csharp
public DataOciAnnouncementsServiceServicesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList">DataOciAnnouncementsServiceServicesFilterList</a>

---

##### `ServicesCollection`<sup>Required</sup> <a name="ServicesCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.servicesCollection"></a>

```csharp
public DataOciAnnouncementsServiceServicesServicesCollectionList ServicesCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList">DataOciAnnouncementsServiceServicesServicesCollectionList</a>

---

##### `CommsManagerNameInput`<sup>Optional</sup> <a name="CommsManagerNameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerNameInput"></a>

```csharp
public string CommsManagerNameInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlatformTypeInput`<sup>Optional</sup> <a name="PlatformTypeInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformTypeInput"></a>

```csharp
public string PlatformTypeInput { get; }
```

- *Type:* string

---

##### `CommsManagerName`<sup>Required</sup> <a name="CommsManagerName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerName"></a>

```csharp
public string CommsManagerName { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformType"></a>

```csharp
public string PlatformType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceServicesConfig <a name="DataOciAnnouncementsServiceServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string CommsManagerName = null,
    object Filter = null,
    string Id = null,
    string PlatformType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#compartment_id DataOciAnnouncementsServiceServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.commsManagerName">CommsManagerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#comms_manager_name DataOciAnnouncementsServiceServices#comms_manager_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#id DataOciAnnouncementsServiceServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.platformType">PlatformType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#platform_type DataOciAnnouncementsServiceServices#platform_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#compartment_id DataOciAnnouncementsServiceServices#compartment_id}.

---

##### `CommsManagerName`<sup>Optional</sup> <a name="CommsManagerName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.commsManagerName"></a>

```csharp
public string CommsManagerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#comms_manager_name DataOciAnnouncementsServiceServices#comms_manager_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#filter DataOciAnnouncementsServiceServices#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#id DataOciAnnouncementsServiceServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlatformType`<sup>Optional</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.platformType"></a>

```csharp
public string PlatformType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#platform_type DataOciAnnouncementsServiceServices#platform_type}.

---

### DataOciAnnouncementsServiceServicesFilter <a name="DataOciAnnouncementsServiceServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#name DataOciAnnouncementsServiceServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#values DataOciAnnouncementsServiceServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#regex DataOciAnnouncementsServiceServices#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#name DataOciAnnouncementsServiceServices#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#values DataOciAnnouncementsServiceServices#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#regex DataOciAnnouncementsServiceServices#regex}.

---

### DataOciAnnouncementsServiceServicesServicesCollection <a name="DataOciAnnouncementsServiceServicesServicesCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesServicesCollection {

};
```


### DataOciAnnouncementsServiceServicesServicesCollectionItems <a name="DataOciAnnouncementsServiceServicesServicesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesServicesCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceServicesFilterList <a name="DataOciAnnouncementsServiceServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.get"></a>

```csharp
private DataOciAnnouncementsServiceServicesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAnnouncementsServiceServicesFilterOutputReference <a name="DataOciAnnouncementsServiceServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciAnnouncementsServiceServicesServicesCollectionItemsList <a name="DataOciAnnouncementsServiceServicesServicesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesServicesCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.get"></a>

```csharp
private DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference <a name="DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.commsManagerName">CommsManagerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.excludedRealms">ExcludedRealms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.platformType">PlatformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.previousServiceNames">PreviousServiceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.teamName">TeamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems">DataOciAnnouncementsServiceServicesServicesCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommsManagerName`<sup>Required</sup> <a name="CommsManagerName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.commsManagerName"></a>

```csharp
public string CommsManagerName { get; }
```

- *Type:* string

---

##### `ExcludedRealms`<sup>Required</sup> <a name="ExcludedRealms" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.excludedRealms"></a>

```csharp
public string[] ExcludedRealms { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.platformType"></a>

```csharp
public string PlatformType { get; }
```

- *Type:* string

---

##### `PreviousServiceNames`<sup>Required</sup> <a name="PreviousServiceNames" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.previousServiceNames"></a>

```csharp
public string[] PreviousServiceNames { get; }
```

- *Type:* string[]

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TeamName`<sup>Required</sup> <a name="TeamName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.teamName"></a>

```csharp
public string TeamName { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceServicesServicesCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems">DataOciAnnouncementsServiceServicesServicesCollectionItems</a>

---


### DataOciAnnouncementsServiceServicesServicesCollectionList <a name="DataOciAnnouncementsServiceServicesServicesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesServicesCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.get"></a>

```csharp
private DataOciAnnouncementsServiceServicesServicesCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciAnnouncementsServiceServicesServicesCollectionOutputReference <a name="DataOciAnnouncementsServiceServicesServicesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciAnnouncementsServiceServicesServicesCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList">DataOciAnnouncementsServiceServicesServicesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection">DataOciAnnouncementsServiceServicesServicesCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.items"></a>

```csharp
public DataOciAnnouncementsServiceServicesServicesCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList">DataOciAnnouncementsServiceServicesServicesCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciAnnouncementsServiceServicesServicesCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection">DataOciAnnouncementsServiceServicesServicesCollection</a>

---



