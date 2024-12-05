# `dataOciOpsiAwrHubAwrSnapshots` Submodule <a name="`dataOciOpsiAwrHubAwrSnapshots` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSnapshots <a name="DataOciOpsiAwrHubAwrSnapshots" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots oci_opsi_awr_hub_awr_snapshots}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshots(scope Construct, id *string, config DataOciOpsiAwrHubAwrSnapshotsConfig) DataOciOpsiAwrHubAwrSnapshots
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig">DataOciOpsiAwrHubAwrSnapshotsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig">DataOciOpsiAwrHubAwrSnapshotsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo">ResetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo">ResetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeGreaterThanOrEqualTo` <a name="ResetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo"></a>

```go
func ResetTimeGreaterThanOrEqualTo()
```

##### `ResetTimeLessThanOrEqualTo` <a name="ResetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo"></a>

```go
func ResetTimeLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshots_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshots_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshots_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshots_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSnapshots to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOpsiAwrHubAwrSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection">AwrSnapshotCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput">AwrHubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput">AwrSourceDatabaseIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput">TimeGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput">TimeLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId">AwrHubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier">AwrSourceDatabaseIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AwrSnapshotCollection`<sup>Required</sup> <a name="AwrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection"></a>

```go
func AwrSnapshotCollection() DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter"></a>

```go
func Filter() DataOciOpsiAwrHubAwrSnapshotsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a>

---

##### `AwrHubIdInput`<sup>Optional</sup> <a name="AwrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput"></a>

```go
func AwrHubIdInput() *string
```

- *Type:* *string

---

##### `AwrSourceDatabaseIdentifierInput`<sup>Optional</sup> <a name="AwrSourceDatabaseIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput"></a>

```go
func AwrSourceDatabaseIdentifierInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput"></a>

```go
func TimeGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput"></a>

```go
func TimeLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId"></a>

```go
func AwrHubId() *string
```

- *Type:* *string

---

##### `AwrSourceDatabaseIdentifier`<sup>Required</sup> <a name="AwrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier"></a>

```go
func AwrSourceDatabaseIdentifier() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo"></a>

```go
func TimeGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeLessThanOrEqualTo`<sup>Required</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo"></a>

```go
func TimeLessThanOrEqualTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

&dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection {

}
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

&dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems {

}
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

&dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems {

}
```


### DataOciOpsiAwrHubAwrSnapshotsConfig <a name="DataOciOpsiAwrHubAwrSnapshotsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

&dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AwrHubId: *string,
	AwrSourceDatabaseIdentifier: *string,
	Filter: interface{},
	Id: *string,
	TimeGreaterThanOrEqualTo: *string,
	TimeLessThanOrEqualTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId">AwrHubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier">AwrSourceDatabaseIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo">TimeGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo">TimeLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwrHubId`<sup>Required</sup> <a name="AwrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId"></a>

```go
AwrHubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}.

---

##### `AwrSourceDatabaseIdentifier`<sup>Required</sup> <a name="AwrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier"></a>

```go
AwrSourceDatabaseIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#filter DataOciOpsiAwrHubAwrSnapshots#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo"></a>

```go
TimeGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}.

---

##### `TimeLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo"></a>

```go
TimeLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}.

---

### DataOciOpsiAwrHubAwrSnapshotsFilter <a name="DataOciOpsiAwrHubAwrSnapshotsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

&dataociopsiawrhubawrsnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId">AwrSourceDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount">ErrorCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber">InstanceNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier">SnapshotIdentifier</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup">TimeDbStartup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin">TimeSnapshotBegin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd">TimeSnapshotEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwrSourceDatabaseId`<sup>Required</sup> <a name="AwrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId"></a>

```go
func AwrSourceDatabaseId() *string
```

- *Type:* *string

---

##### `ErrorCount`<sup>Required</sup> <a name="ErrorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount"></a>

```go
func ErrorCount() *string
```

- *Type:* *string

---

##### `InstanceNumber`<sup>Required</sup> <a name="InstanceNumber" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber"></a>

```go
func InstanceNumber() *f64
```

- *Type:* *f64

---

##### `SnapshotIdentifier`<sup>Required</sup> <a name="SnapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier"></a>

```go
func SnapshotIdentifier() *f64
```

- *Type:* *f64

---

##### `TimeDbStartup`<sup>Required</sup> <a name="TimeDbStartup" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup"></a>

```go
func TimeDbStartup() *string
```

- *Type:* *string

---

##### `TimeSnapshotBegin`<sup>Required</sup> <a name="TimeSnapshotBegin" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin"></a>

```go
func TimeSnapshotBegin() *string
```

- *Type:* *string

---

##### `TimeSnapshotEnd`<sup>Required</sup> <a name="TimeSnapshotEnd" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd"></a>

```go
func TimeSnapshotEnd() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items"></a>

```go
func Items() DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get"></a>

```go
func Get(index *f64) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a>

---


### DataOciOpsiAwrHubAwrSnapshotsFilterList <a name="DataOciOpsiAwrHubAwrSnapshotsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOpsiAwrHubAwrSnapshotsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get"></a>

```go
func Get(index *f64) DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociopsiawrhubawrsnapshots"

dataociopsiawrhubawrsnapshots.NewDataOciOpsiAwrHubAwrSnapshotsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



