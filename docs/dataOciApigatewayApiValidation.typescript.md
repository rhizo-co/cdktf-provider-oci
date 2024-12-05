# `dataOciApigatewayApiValidation` Submodule <a name="`dataOciApigatewayApiValidation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayApiValidation <a name="DataOciApigatewayApiValidation" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_api_validation oci_apigateway_api_validation}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidation(scope: Construct, id: string, config: DataOciApigatewayApiValidationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig">DataOciApigatewayApiValidationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig">DataOciApigatewayApiValidationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApigatewayApiValidation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isConstruct"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformElement"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformDataSource"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApigatewayApiValidation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApigatewayApiValidation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApigatewayApiValidation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_api_validation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayApiValidation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.validations">validations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList">DataOciApigatewayApiValidationValidationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `validations`<sup>Required</sup> <a name="validations" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.validations"></a>

```typescript
public readonly validations: DataOciApigatewayApiValidationValidationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList">DataOciApigatewayApiValidationValidationsList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayApiValidationConfig <a name="DataOciApigatewayApiValidationConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayApiValidationConfig: dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_api_validation#api_id DataOciApigatewayApiValidation#api_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_api_validation#id DataOciApigatewayApiValidation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_api_validation#api_id DataOciApigatewayApiValidation#api_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_api_validation#id DataOciApigatewayApiValidation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciApigatewayApiValidationValidations <a name="DataOciApigatewayApiValidationValidations" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidations.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayApiValidationValidations: dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidations = { ... }
```


### DataOciApigatewayApiValidationValidationsDetails <a name="DataOciApigatewayApiValidationValidationsDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetails.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayApiValidationValidationsDetails: dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetails = { ... }
```


### DataOciApigatewayApiValidationValidationsDetailsSrc <a name="DataOciApigatewayApiValidationValidationsDetailsSrc" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrc"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrc.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayApiValidationValidationsDetailsSrc: dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrc = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayApiValidationValidationsDetailsList <a name="DataOciApigatewayApiValidationValidationsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.get"></a>

```typescript
public get(index: number): DataOciApigatewayApiValidationValidationsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayApiValidationValidationsDetailsOutputReference <a name="DataOciApigatewayApiValidationValidationsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.msg">msg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.src">src</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList">DataOciApigatewayApiValidationValidationsDetailsSrcList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetails">DataOciApigatewayApiValidationValidationsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `msg`<sup>Required</sup> <a name="msg" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.msg"></a>

```typescript
public readonly msg: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `src`<sup>Required</sup> <a name="src" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.src"></a>

```typescript
public readonly src: DataOciApigatewayApiValidationValidationsDetailsSrcList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList">DataOciApigatewayApiValidationValidationsDetailsSrcList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayApiValidationValidationsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetails">DataOciApigatewayApiValidationValidationsDetails</a>

---


### DataOciApigatewayApiValidationValidationsDetailsSrcList <a name="DataOciApigatewayApiValidationValidationsDetailsSrcList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.get"></a>

```typescript
public get(index: number): DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference <a name="DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.items">items</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrc">DataOciApigatewayApiValidationValidationsDetailsSrc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.items"></a>

```typescript
public readonly items: number[];
```

- *Type:* number[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayApiValidationValidationsDetailsSrc;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsSrc">DataOciApigatewayApiValidationValidationsDetailsSrc</a>

---


### DataOciApigatewayApiValidationValidationsList <a name="DataOciApigatewayApiValidationValidationsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.get"></a>

```typescript
public get(index: number): DataOciApigatewayApiValidationValidationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayApiValidationValidationsOutputReference <a name="DataOciApigatewayApiValidationValidationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayApiValidation } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList">DataOciApigatewayApiValidationValidationsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidations">DataOciApigatewayApiValidationValidations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.details"></a>

```typescript
public readonly details: DataOciApigatewayApiValidationValidationsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsDetailsList">DataOciApigatewayApiValidationValidationsDetailsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayApiValidationValidations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayApiValidation.DataOciApigatewayApiValidationValidations">DataOciApigatewayApiValidationValidations</a>

---



