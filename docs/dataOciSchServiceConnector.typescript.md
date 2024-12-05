# `dataOciSchServiceConnector` Submodule <a name="`dataOciSchServiceConnector` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSchServiceConnector <a name="DataOciSchServiceConnector" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector oci_sch_service_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnector(scope: Construct, id: string, config: DataOciSchServiceConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig">DataOciSchServiceConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig">DataOciSchServiceConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciSchServiceConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciSchServiceConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciSchServiceConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSchServiceConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList">DataOciSchServiceConnectorSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList">DataOciSchServiceConnectorTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList">DataOciSchServiceConnectorTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorIdInput">serviceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorId">serviceConnectorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.source"></a>

```typescript
public readonly source: DataOciSchServiceConnectorSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList">DataOciSchServiceConnectorSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.target"></a>

```typescript
public readonly target: DataOciSchServiceConnectorTargetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList">DataOciSchServiceConnectorTargetList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tasks"></a>

```typescript
public readonly tasks: DataOciSchServiceConnectorTasksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList">DataOciSchServiceConnectorTasksList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `serviceConnectorIdInput`<sup>Optional</sup> <a name="serviceConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorIdInput"></a>

```typescript
public readonly serviceConnectorIdInput: string;
```

- *Type:* string

---

##### `serviceConnectorId`<sup>Required</sup> <a name="serviceConnectorId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.serviceConnectorId"></a>

```typescript
public readonly serviceConnectorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSchServiceConnectorConfig <a name="DataOciSchServiceConnectorConfig" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorConfig: dataOciSchServiceConnector.DataOciSchServiceConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.serviceConnectorId">serviceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceConnectorId`<sup>Required</sup> <a name="serviceConnectorId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorConfig.property.serviceConnectorId"></a>

```typescript
public readonly serviceConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/sch_service_connector#service_connector_id DataOciSchServiceConnector#service_connector_id}.

---

### DataOciSchServiceConnectorSource <a name="DataOciSchServiceConnectorSource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSource: dataOciSchServiceConnector.DataOciSchServiceConnectorSource = { ... }
```


### DataOciSchServiceConnectorSourceCursor <a name="DataOciSchServiceConnectorSourceCursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSourceCursor: dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor = { ... }
```


### DataOciSchServiceConnectorSourceLogSources <a name="DataOciSchServiceConnectorSourceLogSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSourceLogSources: dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources = { ... }
```


### DataOciSchServiceConnectorSourceMonitoringSources <a name="DataOciSchServiceConnectorSourceMonitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSourceMonitoringSources: dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources = { ... }
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails: dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails = { ... }
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces: dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces = { ... }
```


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics: dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics = { ... }
```


### DataOciSchServiceConnectorTarget <a name="DataOciSchServiceConnectorTarget" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorTarget: dataOciSchServiceConnector.DataOciSchServiceConnectorTarget = { ... }
```


### DataOciSchServiceConnectorTargetDimensions <a name="DataOciSchServiceConnectorTargetDimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorTargetDimensions: dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions = { ... }
```


### DataOciSchServiceConnectorTargetDimensionsDimensionValue <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorTargetDimensionsDimensionValue: dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue = { ... }
```


### DataOciSchServiceConnectorTasks <a name="DataOciSchServiceConnectorTasks" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

const dataOciSchServiceConnectorTasks: dataOciSchServiceConnector.DataOciSchServiceConnectorTasks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSchServiceConnectorSourceCursorList <a name="DataOciSchServiceConnectorSourceCursorList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceCursorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceCursorOutputReference <a name="DataOciSchServiceConnectorSourceCursorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor">DataOciSchServiceConnectorSourceCursor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSourceCursor;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursor">DataOciSchServiceConnectorSourceCursor</a>

---


### DataOciSchServiceConnectorSourceList <a name="DataOciSchServiceConnectorSourceList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceLogSourcesList <a name="DataOciSchServiceConnectorSourceLogSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceLogSourcesOutputReference <a name="DataOciSchServiceConnectorSourceLogSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logId">logId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources">DataOciSchServiceConnectorSourceLogSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logId`<sup>Required</sup> <a name="logId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.logId"></a>

```typescript
public readonly logId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSourceLogSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSources">DataOciSchServiceConnectorSourceLogSources</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetrics</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.metrics"></a>

```typescript
public readonly metrics: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesMetricsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespaces</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.namespaces"></a>

```typescript
public readonly namespaces: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsNamespacesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetails</a>

---


### DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference <a name="DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails">namespaceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources">DataOciSchServiceConnectorSourceMonitoringSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `namespaceDetails`<sup>Required</sup> <a name="namespaceDetails" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.namespaceDetails"></a>

```typescript
public readonly namespaceDetails: DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList">DataOciSchServiceConnectorSourceMonitoringSourcesNamespaceDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSourceMonitoringSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSources">DataOciSchServiceConnectorSourceMonitoringSources</a>

---


### DataOciSchServiceConnectorSourceOutputReference <a name="DataOciSchServiceConnectorSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.configMap">configMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.cursor">cursor</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList">DataOciSchServiceConnectorSourceCursorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.logSources">logSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList">DataOciSchServiceConnectorSourceLogSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.monitoringSources">monitoringSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList">DataOciSchServiceConnectorSourceMonitoringSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource">DataOciSchServiceConnectorSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configMap`<sup>Required</sup> <a name="configMap" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.configMap"></a>

```typescript
public readonly configMap: string;
```

- *Type:* string

---

##### `cursor`<sup>Required</sup> <a name="cursor" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.cursor"></a>

```typescript
public readonly cursor: DataOciSchServiceConnectorSourceCursorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceCursorList">DataOciSchServiceConnectorSourceCursorList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logSources`<sup>Required</sup> <a name="logSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.logSources"></a>

```typescript
public readonly logSources: DataOciSchServiceConnectorSourceLogSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceLogSourcesList">DataOciSchServiceConnectorSourceLogSourcesList</a>

---

##### `monitoringSources`<sup>Required</sup> <a name="monitoringSources" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.monitoringSources"></a>

```typescript
public readonly monitoringSources: DataOciSchServiceConnectorSourceMonitoringSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceMonitoringSourcesList">DataOciSchServiceConnectorSourceMonitoringSourcesList</a>

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorSource">DataOciSchServiceConnectorSource</a>

---


### DataOciSchServiceConnectorTargetDimensionsDimensionValueList <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValueList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference <a name="DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue">DataOciSchServiceConnectorTargetDimensionsDimensionValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorTargetDimensionsDimensionValue;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValue">DataOciSchServiceConnectorTargetDimensionsDimensionValue</a>

---


### DataOciSchServiceConnectorTargetDimensionsList <a name="DataOciSchServiceConnectorTargetDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorTargetDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorTargetDimensionsOutputReference <a name="DataOciSchServiceConnectorTargetDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue">dimensionValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList">DataOciSchServiceConnectorTargetDimensionsDimensionValueList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions">DataOciSchServiceConnectorTargetDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionValue`<sup>Required</sup> <a name="dimensionValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.dimensionValue"></a>

```typescript
public readonly dimensionValue: DataOciSchServiceConnectorTargetDimensionsDimensionValueList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsDimensionValueList">DataOciSchServiceConnectorTargetDimensionsDimensionValueList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorTargetDimensions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensions">DataOciSchServiceConnectorTargetDimensions</a>

---


### DataOciSchServiceConnectorTargetList <a name="DataOciSchServiceConnectorTargetList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorTargetOutputReference <a name="DataOciSchServiceConnectorTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs">batchRolloverSizeInMbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs">batchRolloverTimeInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInNum">batchSizeInNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList">DataOciSchServiceConnectorTargetDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.enableFormattedMessaging">enableFormattedMessaging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logGroupId">logGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logSourceIdentifier">logSourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.objectNamePrefix">objectNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.topicId">topicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget">DataOciSchServiceConnectorTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchRolloverSizeInMbs`<sup>Required</sup> <a name="batchRolloverSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverSizeInMbs"></a>

```typescript
public readonly batchRolloverSizeInMbs: number;
```

- *Type:* number

---

##### `batchRolloverTimeInMs`<sup>Required</sup> <a name="batchRolloverTimeInMs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchRolloverTimeInMs"></a>

```typescript
public readonly batchRolloverTimeInMs: number;
```

- *Type:* number

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

---

##### `batchSizeInNum`<sup>Required</sup> <a name="batchSizeInNum" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchSizeInNum"></a>

```typescript
public readonly batchSizeInNum: number;
```

- *Type:* number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: DataOciSchServiceConnectorTargetDimensionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetDimensionsList">DataOciSchServiceConnectorTargetDimensionsList</a>

---

##### `enableFormattedMessaging`<sup>Required</sup> <a name="enableFormattedMessaging" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.enableFormattedMessaging"></a>

```typescript
public readonly enableFormattedMessaging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logGroupId`<sup>Required</sup> <a name="logGroupId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logGroupId"></a>

```typescript
public readonly logGroupId: string;
```

- *Type:* string

---

##### `logSourceIdentifier`<sup>Required</sup> <a name="logSourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.logSourceIdentifier"></a>

```typescript
public readonly logSourceIdentifier: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `objectNamePrefix`<sup>Required</sup> <a name="objectNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.objectNamePrefix"></a>

```typescript
public readonly objectNamePrefix: string;
```

- *Type:* string

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `topicId`<sup>Required</sup> <a name="topicId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.topicId"></a>

```typescript
public readonly topicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTarget">DataOciSchServiceConnectorTarget</a>

---


### DataOciSchServiceConnectorTasksList <a name="DataOciSchServiceConnectorTasksList" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get"></a>

```typescript
public get(index: number): DataOciSchServiceConnectorTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciSchServiceConnectorTasksOutputReference <a name="DataOciSchServiceConnectorTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer"></a>

```typescript
import { dataOciSchServiceConnector } from 'rhizo-co-terraform-provider-oci'

new dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchSizeInKbs">batchSizeInKbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchTimeInSec">batchTimeInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks">DataOciSchServiceConnectorTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchSizeInKbs`<sup>Required</sup> <a name="batchSizeInKbs" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchSizeInKbs"></a>

```typescript
public readonly batchSizeInKbs: number;
```

- *Type:* number

---

##### `batchTimeInSec`<sup>Required</sup> <a name="batchTimeInSec" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.batchTimeInSec"></a>

```typescript
public readonly batchTimeInSec: number;
```

- *Type:* number

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciSchServiceConnectorTasks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSchServiceConnector.DataOciSchServiceConnectorTasks">DataOciSchServiceConnectorTasks</a>

---



