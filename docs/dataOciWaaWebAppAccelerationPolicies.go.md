# `dataOciWaaWebAppAccelerationPolicies` Submodule <a name="`dataOciWaaWebAppAccelerationPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerationPolicies <a name="DataOciWaaWebAppAccelerationPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies oci_waa_web_app_acceleration_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPolicies(scope Construct, id *string, config DataOciWaaWebAppAccelerationPoliciesConfig) DataOciWaaWebAppAccelerationPolicies
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig">DataOciWaaWebAppAccelerationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig">DataOciWaaWebAppAccelerationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPolicies_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPolicies_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPolicies_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPolicies_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciWaaWebAppAccelerationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection">WebAppAccelerationPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput">StateInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state">State</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter"></a>

```go
func Filter() DataOciWaaWebAppAccelerationPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a>

---

##### `WebAppAccelerationPolicyCollection`<sup>Required</sup> <a name="WebAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection"></a>

```go
func WebAppAccelerationPolicyCollection() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput"></a>

```go
func StateInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state"></a>

```go
func State() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationPoliciesConfig <a name="DataOciWaaWebAppAccelerationPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesConfig {
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
	State: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state">State</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#filter DataOciWaaWebAppAccelerationPolicies#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state"></a>

```go
State *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}.

---

### DataOciWaaWebAppAccelerationPoliciesFilter <a name="DataOciWaaWebAppAccelerationPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}.

---

### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection {

}
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems {

}
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy {

}
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy {

}
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

&dataociwaawebappaccelerationpolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationPoliciesFilterList <a name="DataOciWaaWebAppAccelerationPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaaWebAppAccelerationPoliciesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get"></a>

```go
func Get(index *f64) DataOciWaaWebAppAccelerationPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWaaWebAppAccelerationPoliciesFilterOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaaWebAppAccelerationPoliciesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy">ResponseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy">ResponseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResponseCachingPolicy`<sup>Required</sup> <a name="ResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy"></a>

```go
func ResponseCachingPolicy() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a>

---

##### `ResponseCompressionPolicy`<sup>Required</sup> <a name="ResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy"></a>

```go
func ResponseCompressionPolicy() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get"></a>

```go
func Get(index *f64) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">IsResponseHeaderBasedCachingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsResponseHeaderBasedCachingEnabled`<sup>Required</sup> <a name="IsResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```go
func IsResponseHeaderBasedCachingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get"></a>

```go
func Get(index *f64) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get"></a>

```go
func Get(index *f64) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression">GzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GzipCompression`<sup>Required</sup> <a name="GzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```go
func GzipCompression() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get"></a>

```go
func Get(index *f64) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociwaawebappaccelerationpolicies"

dataociwaawebappaccelerationpolicies.NewDataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items"></a>

```go
func Items() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a>

---



