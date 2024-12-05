# `dataOciHealthChecksVantagePoints` Submodule <a name="`dataOciHealthChecksVantagePoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksVantagePoints <a name="DataOciHealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points oci_health_checks_vantage_points}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints(scope: Construct, id: string, config?: DataOciHealthChecksVantagePointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig">DataOciHealthChecksVantagePointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig">DataOciHealthChecksVantagePointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciHealthChecksVantagePointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksVantagePoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciHealthChecksVantagePoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciHealthChecksVantagePoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciHealthChecksVantagePoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksVantagePoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList">DataOciHealthChecksVantagePointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.healthChecksVantagePoints">healthChecksVantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filter"></a>

```typescript
public readonly filter: DataOciHealthChecksVantagePointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList">DataOciHealthChecksVantagePointsFilterList</a>

---

##### `healthChecksVantagePoints`<sup>Required</sup> <a name="healthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.healthChecksVantagePoints"></a>

```typescript
public readonly healthChecksVantagePoints: DataOciHealthChecksVantagePointsHealthChecksVantagePointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciHealthChecksVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksVantagePointsConfig <a name="DataOciHealthChecksVantagePointsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksVantagePointsConfig: dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#display_name DataOciHealthChecksVantagePoints#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciHealthChecksVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#filter DataOciHealthChecksVantagePoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#id DataOciHealthChecksVantagePoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

### DataOciHealthChecksVantagePointsFilter <a name="DataOciHealthChecksVantagePointsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksVantagePointsFilter: dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#values DataOciHealthChecksVantagePoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#regex DataOciHealthChecksVantagePoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#name DataOciHealthChecksVantagePoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#values DataOciHealthChecksVantagePoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_vantage_points#regex DataOciHealthChecksVantagePoints#regex}.

---

### DataOciHealthChecksVantagePointsHealthChecksVantagePoints <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksVantagePointsHealthChecksVantagePoints: dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints = { ... }
```


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo: dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo = { ... }
```


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting: dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksVantagePointsFilterList <a name="DataOciHealthChecksVantagePointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksVantagePointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciHealthChecksVantagePointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>[]

---


### DataOciHealthChecksVantagePointsFilterOutputReference <a name="DataOciHealthChecksVantagePointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciHealthChecksVantagePointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsFilter">DataOciHealthChecksVantagePointsFilter</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.adminDivCode">adminDivCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.cityName">cityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryName">countryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.geoKey">geoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.latitude">latitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.longitude">longitude</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminDivCode`<sup>Required</sup> <a name="adminDivCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.adminDivCode"></a>

```typescript
public readonly adminDivCode: string;
```

- *Type:* string

---

##### `cityName`<sup>Required</sup> <a name="cityName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.cityName"></a>

```typescript
public readonly cityName: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `countryName`<sup>Required</sup> <a name="countryName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.countryName"></a>

```typescript
public readonly countryName: string;
```

- *Type:* string

---

##### `geoKey`<sup>Required</sup> <a name="geoKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.geoKey"></a>

```typescript
public readonly geoKey: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.latitude"></a>

```typescript
public readonly latitude: number;
```

- *Type:* number

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.longitude"></a>

```typescript
public readonly longitude: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.geo">geo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.providerName">providerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.routing">routing</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints">DataOciHealthChecksVantagePointsHealthChecksVantagePoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `geo`<sup>Required</sup> <a name="geo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.geo"></a>

```typescript
public readonly geo: DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.routing"></a>

```typescript
public readonly routing: DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksVantagePointsHealthChecksVantagePoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePoints">DataOciHealthChecksVantagePointsHealthChecksVantagePoints</a>

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference <a name="DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksVantagePoints } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asLabel">asLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asLabel`<sup>Required</sup> <a name="asLabel" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asLabel"></a>

```typescript
public readonly asLabel: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRoutingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksVantagePoints.DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting">DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting</a>

---



