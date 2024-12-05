# `dataOciGoldenGateDatabaseRegistrations` Submodule <a name="`dataOciGoldenGateDatabaseRegistrations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDatabaseRegistrations <a name="DataOciGoldenGateDatabaseRegistrations" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations oci_golden_gate_database_registrations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrations(scope Construct, id *string, config DataOciGoldenGateDatabaseRegistrationsConfig) DataOciGoldenGateDatabaseRegistrations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig">DataOciGoldenGateDatabaseRegistrationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig">DataOciGoldenGateDatabaseRegistrationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistrations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGoldenGateDatabaseRegistrations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGoldenGateDatabaseRegistrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGoldenGateDatabaseRegistrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDatabaseRegistrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.databaseRegistrationCollection">DatabaseRegistrationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList">DataOciGoldenGateDatabaseRegistrationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseRegistrationCollection`<sup>Required</sup> <a name="DatabaseRegistrationCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.databaseRegistrationCollection"></a>

```go
func DatabaseRegistrationCollection() DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filter"></a>

```go
func Filter() DataOciGoldenGateDatabaseRegistrationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList">DataOciGoldenGateDatabaseRegistrationsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDatabaseRegistrationsConfig <a name="DataOciGoldenGateDatabaseRegistrationsConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

&dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#compartment_id DataOciGoldenGateDatabaseRegistrations#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#display_name DataOciGoldenGateDatabaseRegistrations#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#filter DataOciGoldenGateDatabaseRegistrations#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#id DataOciGoldenGateDatabaseRegistrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#state DataOciGoldenGateDatabaseRegistrations#state}.

---

### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

&dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection {

}
```


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

&dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems {

}
```


### DataOciGoldenGateDatabaseRegistrationsFilter <a name="DataOciGoldenGateDatabaseRegistrationsFilter" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

&dataocigoldengatedatabaseregistrations.DataOciGoldenGateDatabaseRegistrationsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#name DataOciGoldenGateDatabaseRegistrations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#values DataOciGoldenGateDatabaseRegistrations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#regex DataOciGoldenGateDatabaseRegistrations#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#name DataOciGoldenGateDatabaseRegistrations#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#values DataOciGoldenGateDatabaseRegistrations#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_database_registrations#regex DataOciGoldenGateDatabaseRegistrations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.aliasName">AliasName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.rcePrivateIp">RcePrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretCompartmentId">SecretCompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.sessionMode">SessionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.wallet">Wallet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.aliasName"></a>

```go
func AliasName() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `RcePrivateIp`<sup>Required</sup> <a name="RcePrivateIp" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.rcePrivateIp"></a>

```go
func RcePrivateIp() *string
```

- *Type:* *string

---

##### `SecretCompartmentId`<sup>Required</sup> <a name="SecretCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretCompartmentId"></a>

```go
func SecretCompartmentId() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.sessionMode"></a>

```go
func SessionMode() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `Wallet`<sup>Required</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.wallet"></a>

```go
func Wallet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItems</a>

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get"></a>

```go
func Get(index *f64) DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.items"></a>

```go
func Items() DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection">DataOciGoldenGateDatabaseRegistrationsDatabaseRegistrationCollection</a>

---


### DataOciGoldenGateDatabaseRegistrationsFilterList <a name="DataOciGoldenGateDatabaseRegistrationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrationsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGoldenGateDatabaseRegistrationsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get"></a>

```go
func Get(index *f64) DataOciGoldenGateDatabaseRegistrationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGoldenGateDatabaseRegistrationsFilterOutputReference <a name="DataOciGoldenGateDatabaseRegistrationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedatabaseregistrations"

dataocigoldengatedatabaseregistrations.NewDataOciGoldenGateDatabaseRegistrationsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGoldenGateDatabaseRegistrationsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDatabaseRegistrations.DataOciGoldenGateDatabaseRegistrationsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



