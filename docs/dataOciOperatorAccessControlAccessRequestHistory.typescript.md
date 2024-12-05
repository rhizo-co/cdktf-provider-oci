# `dataOciOperatorAccessControlAccessRequestHistory` Submodule <a name="`dataOciOperatorAccessControlAccessRequestHistory` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequestHistory <a name="DataOciOperatorAccessControlAccessRequestHistory" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history oci_operator_access_control_access_request_history}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory(scope: Construct, id: string, config: DataOciOperatorAccessControlAccessRequestHistoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig">DataOciOperatorAccessControlAccessRequestHistoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig">DataOciOperatorAccessControlAccessRequestHistoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestHistory resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestHistory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequestHistory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOperatorAccessControlAccessRequestHistory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequestHistory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList">DataOciOperatorAccessControlAccessRequestHistoryItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestIdInput">accessRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestId">accessRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.items"></a>

```typescript
public readonly items: DataOciOperatorAccessControlAccessRequestHistoryItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList">DataOciOperatorAccessControlAccessRequestHistoryItemsList</a>

---

##### `accessRequestIdInput`<sup>Optional</sup> <a name="accessRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestIdInput"></a>

```typescript
public readonly accessRequestIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accessRequestId`<sup>Required</sup> <a name="accessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.accessRequestId"></a>

```typescript
public readonly accessRequestId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestHistoryConfig <a name="DataOciOperatorAccessControlAccessRequestHistoryConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestHistoryConfig: dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.accessRequestId">accessRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#access_request_id DataOciOperatorAccessControlAccessRequestHistory#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#id DataOciOperatorAccessControlAccessRequestHistory#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessRequestId`<sup>Required</sup> <a name="accessRequestId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.accessRequestId"></a>

```typescript
public readonly accessRequestId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#access_request_id DataOciOperatorAccessControlAccessRequestHistory#access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request_history#id DataOciOperatorAccessControlAccessRequestHistory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOperatorAccessControlAccessRequestHistoryItems <a name="DataOciOperatorAccessControlAccessRequestHistoryItems" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

const dataOciOperatorAccessControlAccessRequestHistoryItems: dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestHistoryItemsList <a name="DataOciOperatorAccessControlAccessRequestHistoryItemsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.get"></a>

```typescript
public get(index: number): DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference <a name="DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOperatorAccessControlAccessRequestHistory } from 'rhizo-co-terraform-provider-oci'

new dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.actionsList">actionsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.isAutoApproved">isAutoApproved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.timeOfAction">timeOfAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems">DataOciOperatorAccessControlAccessRequestHistoryItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsList`<sup>Required</sup> <a name="actionsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.actionsList"></a>

```typescript
public readonly actionsList: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `isAutoApproved`<sup>Required</sup> <a name="isAutoApproved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.isAutoApproved"></a>

```typescript
public readonly isAutoApproved: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeOfAction`<sup>Required</sup> <a name="timeOfAction" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.timeOfAction"></a>

```typescript
public readonly timeOfAction: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOperatorAccessControlAccessRequestHistoryItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequestHistory.DataOciOperatorAccessControlAccessRequestHistoryItems">DataOciOperatorAccessControlAccessRequestHistoryItems</a>

---



