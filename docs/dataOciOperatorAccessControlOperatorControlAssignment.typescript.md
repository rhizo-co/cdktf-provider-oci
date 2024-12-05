# `dataOciOperatorAccessControlOperatorControlAssignment` Submodule <a name="`dataOciOperatorAccessControlOperatorControlAssignment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlOperatorControlAssignment <a name="DataOciOperatorAccessControlOperatorControlAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment(scope: Construct, id: string, config: DataOciOperatorAccessControlOperatorControlAssignmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig">DataOciOperatorAccessControlOperatorControlAssignmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig">DataOciOperatorAccessControlOperatorControlAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlOperatorControlAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.assignerId">assignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.detachmentDescription">detachmentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorCode">errorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance">isAutoApproveDuringMaintenance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment">isDefaultAssignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways">isEnforcedAlways</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded">isHypervisorLogForwarded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isLogForwarded">isLogForwarded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.opControlName">opControlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlId">operatorControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress">remoteSyslogServerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert">remoteSyslogServerCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort">remoteSyslogServerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom">timeAssignmentFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo">timeAssignmentTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfAssignment">timeOfAssignment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfDeletion">timeOfDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.unassignerId">unassignerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger">validateAssignmentTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentIdInput">operatorControlAssignmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentId">operatorControlAssignmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `assignerId`<sup>Required</sup> <a name="assignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.assignerId"></a>

```typescript
public readonly assignerId: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `detachmentDescription`<sup>Required</sup> <a name="detachmentDescription" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.detachmentDescription"></a>

```typescript
public readonly detachmentDescription: string;
```

- *Type:* string

---

##### `errorCode`<sup>Required</sup> <a name="errorCode" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorCode"></a>

```typescript
public readonly errorCode: number;
```

- *Type:* number

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoApproveDuringMaintenance`<sup>Required</sup> <a name="isAutoApproveDuringMaintenance" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isAutoApproveDuringMaintenance"></a>

```typescript
public readonly isAutoApproveDuringMaintenance: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDefaultAssignment`<sup>Required</sup> <a name="isDefaultAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isDefaultAssignment"></a>

```typescript
public readonly isDefaultAssignment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isEnforcedAlways`<sup>Required</sup> <a name="isEnforcedAlways" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isEnforcedAlways"></a>

```typescript
public readonly isEnforcedAlways: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHypervisorLogForwarded`<sup>Required</sup> <a name="isHypervisorLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isHypervisorLogForwarded"></a>

```typescript
public readonly isHypervisorLogForwarded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isLogForwarded`<sup>Required</sup> <a name="isLogForwarded" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.isLogForwarded"></a>

```typescript
public readonly isLogForwarded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `opControlName`<sup>Required</sup> <a name="opControlName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.opControlName"></a>

```typescript
public readonly opControlName: string;
```

- *Type:* string

---

##### `operatorControlId`<sup>Required</sup> <a name="operatorControlId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlId"></a>

```typescript
public readonly operatorControlId: string;
```

- *Type:* string

---

##### `remoteSyslogServerAddress`<sup>Required</sup> <a name="remoteSyslogServerAddress" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerAddress"></a>

```typescript
public readonly remoteSyslogServerAddress: string;
```

- *Type:* string

---

##### `remoteSyslogServerCaCert`<sup>Required</sup> <a name="remoteSyslogServerCaCert" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerCaCert"></a>

```typescript
public readonly remoteSyslogServerCaCert: string;
```

- *Type:* string

---

##### `remoteSyslogServerPort`<sup>Required</sup> <a name="remoteSyslogServerPort" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.remoteSyslogServerPort"></a>

```typescript
public readonly remoteSyslogServerPort: number;
```

- *Type:* number

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAssignmentFrom`<sup>Required</sup> <a name="timeAssignmentFrom" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentFrom"></a>

```typescript
public readonly timeAssignmentFrom: string;
```

- *Type:* string

---

##### `timeAssignmentTo`<sup>Required</sup> <a name="timeAssignmentTo" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeAssignmentTo"></a>

```typescript
public readonly timeAssignmentTo: string;
```

- *Type:* string

---

##### `timeOfAssignment`<sup>Required</sup> <a name="timeOfAssignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfAssignment"></a>

```typescript
public readonly timeOfAssignment: string;
```

- *Type:* string

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.timeOfDeletion"></a>

```typescript
public readonly timeOfDeletion: string;
```

- *Type:* string

---

##### `unassignerId`<sup>Required</sup> <a name="unassignerId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.unassignerId"></a>

```typescript
public readonly unassignerId: string;
```

- *Type:* string

---

##### `validateAssignmentTrigger`<sup>Required</sup> <a name="validateAssignmentTrigger" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.validateAssignmentTrigger"></a>

```typescript
public readonly validateAssignmentTrigger: number;
```

- *Type:* number

---

##### `operatorControlAssignmentIdInput`<sup>Optional</sup> <a name="operatorControlAssignmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentIdInput"></a>

```typescript
public readonly operatorControlAssignmentIdInput: string;
```

- *Type:* string

---

##### `operatorControlAssignmentId`<sup>Required</sup> <a name="operatorControlAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.operatorControlAssignmentId"></a>

```typescript
public readonly operatorControlAssignmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlOperatorControlAssignmentConfig <a name="DataOciOperatorAccessControlOperatorControlAssignmentConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlOperatorControlAssignment } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlOperatorControlAssignmentConfig: dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlAssignmentId">operatorControlAssignmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operatorControlAssignmentId`<sup>Required</sup> <a name="operatorControlAssignmentId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlOperatorControlAssignment.DataOciOperatorAccessControlOperatorControlAssignmentConfig.property.operatorControlAssignmentId"></a>

```typescript
public readonly operatorControlAssignmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}.

---



