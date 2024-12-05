# `dataOciOperatorAccessControlOperatorControl` Submodule <a name="`dataOciOperatorAccessControlOperatorControl` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControl <a name="DataOciOperatorAccessControlOperatorControl" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control oci_operator_access_control_operator_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl(scope: Construct, id: string, config: DataOciOperatorAccessControlOperatorControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig">DataOciOperatorAccessControlOperatorControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig">DataOciOperatorAccessControlOperatorControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlOperatorControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approvalRequiredOpActionList">approvalRequiredOpActionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approverGroupsList">approverGroupsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approversList">approversList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.emailIdList">emailIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isDefaultOperatorControl">isDefaultOperatorControl</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isFullyPreApproved">isFullyPreApproved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lastModifiedInfo">lastModifiedInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.numberOfApprovers">numberOfApprovers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlName">operatorControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.preApprovedOpActionList">preApprovedOpActionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.systemMessage">systemMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfCreation">timeOfCreation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfModification">timeOfModification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlIdInput">operatorControlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlId">operatorControlId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `approvalRequiredOpActionList`<sup>Required</sup> <a name="approvalRequiredOpActionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approvalRequiredOpActionList"></a>

```typescript
public readonly approvalRequiredOpActionList: string[];
```

- *Type:* string[]

---

##### `approverGroupsList`<sup>Required</sup> <a name="approverGroupsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approverGroupsList"></a>

```typescript
public readonly approverGroupsList: string[];
```

- *Type:* string[]

---

##### `approversList`<sup>Required</sup> <a name="approversList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.approversList"></a>

```typescript
public readonly approversList: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `emailIdList`<sup>Required</sup> <a name="emailIdList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.emailIdList"></a>

```typescript
public readonly emailIdList: string[];
```

- *Type:* string[]

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefaultOperatorControl`<sup>Required</sup> <a name="isDefaultOperatorControl" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isDefaultOperatorControl"></a>

```typescript
public readonly isDefaultOperatorControl: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isFullyPreApproved`<sup>Required</sup> <a name="isFullyPreApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.isFullyPreApproved"></a>

```typescript
public readonly isFullyPreApproved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModifiedInfo`<sup>Required</sup> <a name="lastModifiedInfo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.lastModifiedInfo"></a>

```typescript
public readonly lastModifiedInfo: string;
```

- *Type:* string

---

##### `numberOfApprovers`<sup>Required</sup> <a name="numberOfApprovers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.numberOfApprovers"></a>

```typescript
public readonly numberOfApprovers: number;
```

- *Type:* number

---

##### `operatorControlName`<sup>Required</sup> <a name="operatorControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlName"></a>

```typescript
public readonly operatorControlName: string;
```

- *Type:* string

---

##### `preApprovedOpActionList`<sup>Required</sup> <a name="preApprovedOpActionList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.preApprovedOpActionList"></a>

```typescript
public readonly preApprovedOpActionList: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemMessage`<sup>Required</sup> <a name="systemMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.systemMessage"></a>

```typescript
public readonly systemMessage: string;
```

- *Type:* string

---

##### `timeOfCreation`<sup>Required</sup> <a name="timeOfCreation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfCreation"></a>

```typescript
public readonly timeOfCreation: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `timeOfModification`<sup>Required</sup> <a name="timeOfModification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.timeOfModification"></a>

```typescript
public readonly timeOfModification: string;
```

- *Type:* string

---

##### `operatorControlIdInput`<sup>Optional</sup> <a name="operatorControlIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlIdInput"></a>

```typescript
public readonly operatorControlIdInput: string;
```

- *Type:* string

---

##### `operatorControlId`<sup>Required</sup> <a name="operatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.operatorControlId"></a>

```typescript
public readonly operatorControlId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlConfig <a name="DataOciOperatorAccessControlOperatorControlConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControl } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlOperatorControlConfig: dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.operatorControlId">operatorControlId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control#operator_control_id DataOciOperatorAccessControlOperatorControl#operator_control_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operatorControlId`<sup>Required</sup> <a name="operatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControl.DataOciOperatorAccessControlOperatorControlConfig.property.operatorControlId"></a>

```typescript
public readonly operatorControlId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control#operator_control_id DataOciOperatorAccessControlOperatorControl#operator_control_id}.

---



