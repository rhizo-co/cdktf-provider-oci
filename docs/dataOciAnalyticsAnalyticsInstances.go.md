# `dataOciAnalyticsAnalyticsInstances` Submodule <a name="`dataOciAnalyticsAnalyticsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnalyticsAnalyticsInstances <a name="DataOciAnalyticsAnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances oci_analytics_analytics_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstances(scope Construct, id *string, config DataOciAnalyticsAnalyticsInstancesConfig) DataOciAnalyticsAnalyticsInstances
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig">DataOciAnalyticsAnalyticsInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig">DataOciAnalyticsAnalyticsInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetCapacityType">ResetCapacityType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFeatureSet">ResetFeatureSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCapacityType` <a name="ResetCapacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetCapacityType"></a>

```go
func ResetCapacityType()
```

##### `ResetFeatureSet` <a name="ResetFeatureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFeatureSet"></a>

```go
func ResetFeatureSet()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstances_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstances_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstances_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstances_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAnalyticsAnalyticsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.analyticsInstances">AnalyticsInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList">DataOciAnalyticsAnalyticsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityTypeInput">CapacityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSetInput">FeatureSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityType">CapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSet">FeatureSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AnalyticsInstances`<sup>Required</sup> <a name="AnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.analyticsInstances"></a>

```go
func AnalyticsInstances() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filter"></a>

```go
func Filter() DataOciAnalyticsAnalyticsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList">DataOciAnalyticsAnalyticsInstancesFilterList</a>

---

##### `CapacityTypeInput`<sup>Optional</sup> <a name="CapacityTypeInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityTypeInput"></a>

```go
func CapacityTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FeatureSetInput`<sup>Optional</sup> <a name="FeatureSetInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSetInput"></a>

```go
func FeatureSetInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CapacityType`<sup>Required</sup> <a name="CapacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityType"></a>

```go
func CapacityType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `FeatureSet`<sup>Required</sup> <a name="FeatureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSet"></a>

```go
func FeatureSet() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnalyticsAnalyticsInstancesAnalyticsInstances <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

&dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances {

}
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

&dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity {

}
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

&dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails {

}
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

&dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns {

}
```


### DataOciAnalyticsAnalyticsInstancesConfig <a name="DataOciAnalyticsAnalyticsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

&dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstancesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CapacityType: *string,
	FeatureSet: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.capacityType">CapacityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.featureSet">FeatureSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}.

---

##### `CapacityType`<sup>Optional</sup> <a name="CapacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.capacityType"></a>

```go
CapacityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}.

---

##### `FeatureSet`<sup>Optional</sup> <a name="FeatureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.featureSet"></a>

```go
FeatureSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#filter DataOciAnalyticsAnalyticsInstances#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}.

---

### DataOciAnalyticsAnalyticsInstancesFilter <a name="DataOciAnalyticsAnalyticsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

&dataocianalyticsanalyticsinstances.DataOciAnalyticsAnalyticsInstancesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityType">CapacityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityValue">CapacityValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapacityType`<sup>Required</sup> <a name="CapacityType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityType"></a>

```go
func CapacityType() *string
```

- *Type:* *string

---

##### `CapacityValue`<sup>Required</sup> <a name="CapacityValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityValue"></a>

```go
func CapacityValue() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType">NetworkEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedIps">WhitelistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedServices">WhitelistedServices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedVcns">WhitelistedVcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkEndpointType`<sup>Required</sup> <a name="NetworkEndpointType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```go
func NetworkEndpointType() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds"></a>

```go
func NetworkSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `WhitelistedIps`<sup>Required</sup> <a name="WhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedIps"></a>

```go
func WhitelistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `WhitelistedServices`<sup>Required</sup> <a name="WhitelistedServices" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedServices"></a>

```go
func WhitelistedServices() *[]*string
```

- *Type:* *[]*string

---

##### `WhitelistedVcns`<sup>Required</sup> <a name="WhitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedVcns"></a>

```go
func WhitelistedVcns() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps">WhitelistedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WhitelistedIps`<sup>Required</sup> <a name="WhitelistedIps" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps"></a>

```go
func WhitelistedIps() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.adminUser">AdminUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.capacity">Capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.emailNotification">EmailNotification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureBundle">FeatureBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureSet">FeatureSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.networkEndpointDetails">NetworkEndpointDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.serviceUrl">ServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.updateChannel">UpdateChannel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances">DataOciAnalyticsAnalyticsInstancesAnalyticsInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminUser`<sup>Required</sup> <a name="AdminUser" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.adminUser"></a>

```go
func AdminUser() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.capacity"></a>

```go
func Capacity() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EmailNotification`<sup>Required</sup> <a name="EmailNotification" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.emailNotification"></a>

```go
func EmailNotification() *string
```

- *Type:* *string

---

##### `FeatureBundle`<sup>Required</sup> <a name="FeatureBundle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureBundle"></a>

```go
func FeatureBundle() *string
```

- *Type:* *string

---

##### `FeatureSet`<sup>Required</sup> <a name="FeatureSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureSet"></a>

```go
func FeatureSet() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.idcsAccessToken"></a>

```go
func IdcsAccessToken() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkEndpointDetails`<sup>Required</sup> <a name="NetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.networkEndpointDetails"></a>

```go
func NetworkEndpointDetails() DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList</a>

---

##### `ServiceUrl`<sup>Required</sup> <a name="ServiceUrl" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.serviceUrl"></a>

```go
func ServiceUrl() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.updateChannel"></a>

```go
func UpdateChannel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAnalyticsAnalyticsInstancesAnalyticsInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances">DataOciAnalyticsAnalyticsInstancesAnalyticsInstances</a>

---


### DataOciAnalyticsAnalyticsInstancesFilterList <a name="DataOciAnalyticsAnalyticsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciAnalyticsAnalyticsInstancesFilterOutputReference <a name="DataOciAnalyticsAnalyticsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstances"

dataocianalyticsanalyticsinstances.NewDataOciAnalyticsAnalyticsInstancesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



