# `dataOciLogAnalyticsLogAnalyticsLogGroupsSummary` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsLogGroupsSummary` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsSummary <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsSummary" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary oci_log_analytics_log_analytics_log_groups_summary}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroupssummary"

dataociloganalyticsloganalyticsloggroupssummary.NewDataOciLogAnalyticsLogAnalyticsLogGroupsSummary(scope Construct, id *string, config DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig) DataOciLogAnalyticsLogAnalyticsLogGroupsSummary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroupsSummary resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroupssummary"

dataociloganalyticsloganalyticsloggroupssummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroupssummary"

dataociloganalyticsloganalyticsloggroupssummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroupssummary"

dataociloganalyticsloganalyticsloggroupssummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroupssummary"

dataociloganalyticsloganalyticsloggroupssummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroupsSummary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsLogGroupsSummary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciLogAnalyticsLogAnalyticsLogGroupsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsLogGroupsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.logGroupCount">LogGroupCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LogGroupCount`<sup>Required</sup> <a name="LogGroupCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.logGroupCount"></a>

```go
func LogGroupCount() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociloganalyticsloganalyticsloggroupssummary"

&dataociloganalyticsloganalyticsloggroupssummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#namespace DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#namespace DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#namespace}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroupsSummary.DataOciLogAnalyticsLogAnalyticsLogGroupsSummaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups_summary#id DataOciLogAnalyticsLogAnalyticsLogGroupsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



