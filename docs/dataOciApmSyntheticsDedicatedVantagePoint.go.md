# `dataOciApmSyntheticsDedicatedVantagePoint` Submodule <a name="`dataOciApmSyntheticsDedicatedVantagePoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsDedicatedVantagePoint <a name="DataOciApmSyntheticsDedicatedVantagePoint" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_point oci_apm_synthetics_dedicated_vantage_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.NewDataOciApmSyntheticsDedicatedVantagePoint(scope Construct, id *string, config DataOciApmSyntheticsDedicatedVantagePointConfig) DataOciApmSyntheticsDedicatedVantagePoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig">DataOciApmSyntheticsDedicatedVantagePointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig">DataOciApmSyntheticsDedicatedVantagePointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmSyntheticsDedicatedVantagePoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmSyntheticsDedicatedVantagePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsDedicatedVantagePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails">DvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap">MonitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dedicatedVantagePointIdInput">DedicatedVantagePointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dedicatedVantagePointId">DedicatedVantagePointId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DvpStackDetails`<sup>Required</sup> <a name="DvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails"></a>

```go
func DvpStackDetails() DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList">DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MonitorStatusCountMap`<sup>Required</sup> <a name="MonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap"></a>

```go
func MonitorStatusCountMap() DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `DedicatedVantagePointIdInput`<sup>Optional</sup> <a name="DedicatedVantagePointIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dedicatedVantagePointIdInput"></a>

```go
func DedicatedVantagePointIdInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `DedicatedVantagePointId`<sup>Required</sup> <a name="DedicatedVantagePointId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.dedicatedVantagePointId"></a>

```go
func DedicatedVantagePointId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsDedicatedVantagePointConfig <a name="DataOciApmSyntheticsDedicatedVantagePointConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

&dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	DedicatedVantagePointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_point#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.dedicatedVantagePointId">DedicatedVantagePointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_point#dedicated_vantage_point_id DataOciApmSyntheticsDedicatedVantagePoint#dedicated_vantage_point_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_point#apm_domain_id DataOciApmSyntheticsDedicatedVantagePoint#apm_domain_id}.

---

##### `DedicatedVantagePointId`<sup>Required</sup> <a name="DedicatedVantagePointId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointConfig.property.dedicatedVantagePointId"></a>

```go
DedicatedVantagePointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_dedicated_vantage_point#dedicated_vantage_point_id DataOciApmSyntheticsDedicatedVantagePoint#dedicated_vantage_point_id}.

---

### DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails <a name="DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

&dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails {

}
```


### DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap <a name="DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

&dataociapmsyntheticsdedicatedvantagepoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList <a name="DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.NewDataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.NewDataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId">DvpStackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType">DvpStackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId">DvpStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion">DvpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DvpStackId`<sup>Required</sup> <a name="DvpStackId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId"></a>

```go
func DvpStackId() *string
```

- *Type:* *string

---

##### `DvpStackType`<sup>Required</sup> <a name="DvpStackType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType"></a>

```go
func DvpStackType() *string
```

- *Type:* *string

---

##### `DvpStreamId`<sup>Required</sup> <a name="DvpStreamId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```go
func DvpStreamId() *string
```

- *Type:* *string

---

##### `DvpVersion`<sup>Required</sup> <a name="DvpVersion" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion"></a>

```go
func DvpVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails">DataOciApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---


### DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList <a name="DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.NewDataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference <a name="DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsdedicatedvantagepoint"

dataociapmsyntheticsdedicatedvantagepoint.NewDataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled">Disabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled">Enabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid">Invalid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total">Total</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled"></a>

```go
func Disabled() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled"></a>

```go
func Enabled() *f64
```

- *Type:* *f64

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid"></a>

```go
func Invalid() *f64
```

- *Type:* *f64

---

##### `Total`<sup>Required</sup> <a name="Total" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total"></a>

```go
func Total() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsDedicatedVantagePoint.DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">DataOciApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a>

---



