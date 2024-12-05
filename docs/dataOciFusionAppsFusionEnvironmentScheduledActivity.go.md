# `dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivity <a name="DataOciFusionAppsFusionEnvironmentScheduledActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity oci_fusion_apps_fusion_environment_scheduled_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.NewDataOciFusionAppsFusionEnvironmentScheduledActivity(scope Construct, id *string, config DataOciFusionAppsFusionEnvironmentScheduledActivityConfig) DataOciFusionAppsFusionEnvironmentScheduledActivity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig">DataOciFusionAppsFusionEnvironmentScheduledActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig">DataOciFusionAppsFusionEnvironmentScheduledActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.DataOciFusionAppsFusionEnvironmentScheduledActivity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.DataOciFusionAppsFusionEnvironmentScheduledActivity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.DataOciFusionAppsFusionEnvironmentScheduledActivity_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.DataOciFusionAppsFusionEnvironmentScheduledActivity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions">Actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours">DelayInHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle">RunCycle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability">ServiceAvailability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish">TimeExpectedFinish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart">TimeScheduledStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput">ScheduledActivityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId">ScheduledActivityId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions"></a>

```go
func Actions() DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a>

---

##### `DelayInHours`<sup>Required</sup> <a name="DelayInHours" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours"></a>

```go
func DelayInHours() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RunCycle`<sup>Required</sup> <a name="RunCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle"></a>

```go
func RunCycle() *string
```

- *Type:* *string

---

##### `ServiceAvailability`<sup>Required</sup> <a name="ServiceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability"></a>

```go
func ServiceAvailability() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeExpectedFinish`<sup>Required</sup> <a name="TimeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish"></a>

```go
func TimeExpectedFinish() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeScheduledStart`<sup>Required</sup> <a name="TimeScheduledStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart"></a>

```go
func TimeScheduledStart() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput"></a>

```go
func FusionEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScheduledActivityIdInput`<sup>Optional</sup> <a name="ScheduledActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput"></a>

```go
func ScheduledActivityIdInput() *string
```

- *Type:* *string

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScheduledActivityId`<sup>Required</sup> <a name="ScheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId"></a>

```go
func ScheduledActivityId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActions <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

&dataocifusionappsfusionenvironmentscheduledactivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions {

}
```


### DataOciFusionAppsFusionEnvironmentScheduledActivityConfig <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

&dataocifusionappsfusionenvironmentscheduledactivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FusionEnvironmentId: *string,
	ScheduledActivityId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId">ScheduledActivityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId"></a>

```go
FusionEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}.

---

##### `ScheduledActivityId`<sup>Required</sup> <a name="ScheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId"></a>

```go
ScheduledActivityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.NewDataOciFusionAppsFusionEnvironmentScheduledActivityActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get"></a>

```go
func Get(index *f64) DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifusionappsfusionenvironmentscheduledactivity"

dataocifusionappsfusionenvironmentscheduledactivity.NewDataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact">Artifact</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier">Qualifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey">ReferenceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `Artifact`<sup>Required</sup> <a name="Artifact" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact"></a>

```go
func Artifact() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Qualifier`<sup>Required</sup> <a name="Qualifier" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier"></a>

```go
func Qualifier() *string
```

- *Type:* *string

---

##### `ReferenceKey`<sup>Required</sup> <a name="ReferenceKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey"></a>

```go
func ReferenceKey() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFusionAppsFusionEnvironmentScheduledActivityActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a>

---



