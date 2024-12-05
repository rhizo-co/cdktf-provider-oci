# `dataOciCloudGuardProblemEntities` Submodule <a name="`dataOciCloudGuardProblemEntities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardProblemEntities <a name="DataOciCloudGuardProblemEntities" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities oci_cloud_guard_problem_entities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities(scope: Construct, id: string, config: DataOciCloudGuardProblemEntitiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig">DataOciCloudGuardProblemEntitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig">DataOciCloudGuardProblemEntitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudGuardProblemEntitiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardProblemEntities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isConstruct"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardProblemEntities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardProblemEntities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardProblemEntities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardProblemEntities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList">DataOciCloudGuardProblemEntitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.problemEntityCollection">problemEntityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList">DataOciCloudGuardProblemEntitiesProblemEntityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.problemIdInput">problemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.problemId">problemId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.filter"></a>

```typescript
public readonly filter: DataOciCloudGuardProblemEntitiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList">DataOciCloudGuardProblemEntitiesFilterList</a>

---

##### `problemEntityCollection`<sup>Required</sup> <a name="problemEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.problemEntityCollection"></a>

```typescript
public readonly problemEntityCollection: DataOciCloudGuardProblemEntitiesProblemEntityCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList">DataOciCloudGuardProblemEntitiesProblemEntityCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudGuardProblemEntitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `problemIdInput`<sup>Optional</sup> <a name="problemIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.problemIdInput"></a>

```typescript
public readonly problemIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `problemId`<sup>Required</sup> <a name="problemId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.problemId"></a>

```typescript
public readonly problemId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardProblemEntitiesConfig <a name="DataOciCloudGuardProblemEntitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardProblemEntitiesConfig: dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.problemId">problemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#problem_id DataOciCloudGuardProblemEntities#problem_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#id DataOciCloudGuardProblemEntities#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `problemId`<sup>Required</sup> <a name="problemId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.problemId"></a>

```typescript
public readonly problemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#problem_id DataOciCloudGuardProblemEntities#problem_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudGuardProblemEntitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#filter DataOciCloudGuardProblemEntities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#id DataOciCloudGuardProblemEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCloudGuardProblemEntitiesFilter <a name="DataOciCloudGuardProblemEntitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardProblemEntitiesFilter: dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#name DataOciCloudGuardProblemEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#values DataOciCloudGuardProblemEntities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#regex DataOciCloudGuardProblemEntities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#name DataOciCloudGuardProblemEntities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#values DataOciCloudGuardProblemEntities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_problem_entities#regex DataOciCloudGuardProblemEntities#regex}.

---

### DataOciCloudGuardProblemEntitiesProblemEntityCollection <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollection.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardProblemEntitiesProblemEntityCollection: dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollection = { ... }
```


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardProblemEntitiesProblemEntityCollectionItems: dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems = { ... }
```


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails: dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardProblemEntitiesFilterList <a name="DataOciCloudGuardProblemEntitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardProblemEntitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardProblemEntitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>[]

---


### DataOciCloudGuardProblemEntitiesFilterOutputReference <a name="DataOciCloudGuardProblemEntitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardProblemEntitiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesFilter">DataOciCloudGuardProblemEntitiesFilter</a>

---


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetails</a>

---


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.entityDetails">entityDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.problemId">problemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.resultUrl">resultUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.timeFirstDetected">timeFirstDetected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.timeLastDetected">timeLastDetected</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityDetails`<sup>Required</sup> <a name="entityDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.entityDetails"></a>

```typescript
public readonly entityDetails: DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsEntityDetailsList</a>

---

##### `problemId`<sup>Required</sup> <a name="problemId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.problemId"></a>

```typescript
public readonly problemId: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `resultUrl`<sup>Required</sup> <a name="resultUrl" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.resultUrl"></a>

```typescript
public readonly resultUrl: string;
```

- *Type:* string

---

##### `timeFirstDetected`<sup>Required</sup> <a name="timeFirstDetected" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.timeFirstDetected"></a>

```typescript
public readonly timeFirstDetected: string;
```

- *Type:* string

---

##### `timeLastDetected`<sup>Required</sup> <a name="timeLastDetected" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.timeLastDetected"></a>

```typescript
public readonly timeLastDetected: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItems</a>

---


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionList <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference <a name="DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardProblemEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollection">DataOciCloudGuardProblemEntitiesProblemEntityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList">DataOciCloudGuardProblemEntitiesProblemEntityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardProblemEntitiesProblemEntityCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardProblemEntities.DataOciCloudGuardProblemEntitiesProblemEntityCollection">DataOciCloudGuardProblemEntitiesProblemEntityCollection</a>

---



