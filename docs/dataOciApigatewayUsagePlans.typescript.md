# `dataOciApigatewayUsagePlans` Submodule <a name="`dataOciApigatewayUsagePlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayUsagePlans <a name="DataOciApigatewayUsagePlans" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans oci_apigateway_usage_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans(scope: Construct, id: string, config: DataOciApigatewayUsagePlansConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig">DataOciApigatewayUsagePlansConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig">DataOciApigatewayUsagePlansConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciApigatewayUsagePlansFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApigatewayUsagePlans resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApigatewayUsagePlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApigatewayUsagePlans to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApigatewayUsagePlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayUsagePlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList">DataOciApigatewayUsagePlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.usagePlanCollection">usagePlanCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList">DataOciApigatewayUsagePlansUsagePlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filter"></a>

```typescript
public readonly filter: DataOciApigatewayUsagePlansFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList">DataOciApigatewayUsagePlansFilterList</a>

---

##### `usagePlanCollection`<sup>Required</sup> <a name="usagePlanCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.usagePlanCollection"></a>

```typescript
public readonly usagePlanCollection: DataOciApigatewayUsagePlansUsagePlanCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList">DataOciApigatewayUsagePlansUsagePlanCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciApigatewayUsagePlansFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlans.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayUsagePlansConfig <a name="DataOciApigatewayUsagePlansConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansConfig: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#compartment_id DataOciApigatewayUsagePlans#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#display_name DataOciApigatewayUsagePlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#id DataOciApigatewayUsagePlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#state DataOciApigatewayUsagePlans#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#compartment_id DataOciApigatewayUsagePlans#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#display_name DataOciApigatewayUsagePlans#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciApigatewayUsagePlansFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#filter DataOciApigatewayUsagePlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#id DataOciApigatewayUsagePlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#state DataOciApigatewayUsagePlans#state}.

---

### DataOciApigatewayUsagePlansFilter <a name="DataOciApigatewayUsagePlansFilter" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansFilter: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#name DataOciApigatewayUsagePlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#values DataOciApigatewayUsagePlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#regex DataOciApigatewayUsagePlans#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#name DataOciApigatewayUsagePlans#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#values DataOciApigatewayUsagePlans#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plans#regex DataOciApigatewayUsagePlans#regex}.

---

### DataOciApigatewayUsagePlansUsagePlanCollection <a name="DataOciApigatewayUsagePlansUsagePlanCollection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansUsagePlanCollection: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection = { ... }
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItems <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansUsagePlanCollectionItems: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems = { ... }
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements = { ... }
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota = { ... }
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit = { ... }
```


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

const dataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets: dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayUsagePlansFilterList <a name="DataOciApigatewayUsagePlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApigatewayUsagePlansFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>[]

---


### DataOciApigatewayUsagePlansFilterOutputReference <a name="DataOciApigatewayUsagePlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciApigatewayUsagePlansFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansFilter">DataOciApigatewayUsagePlansFilter</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.quota">quota</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.rateLimit">rateLimit</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.targets">targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quota`<sup>Required</sup> <a name="quota" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.quota"></a>

```typescript
public readonly quota: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList</a>

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.targets"></a>

```typescript
public readonly targets: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlements</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.operationOnBreach">operationOnBreach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.resetPolicy">resetPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operationOnBreach`<sup>Required</sup> <a name="operationOnBreach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.operationOnBreach"></a>

```typescript
public readonly operationOnBreach: string;
```

- *Type:* string

---

##### `resetPolicy`<sup>Required</sup> <a name="resetPolicy" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.resetPolicy"></a>

```typescript
public readonly resetPolicy: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuotaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsQuota</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsRateLimit</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsTargets</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.entitlements">entitlements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems">DataOciApigatewayUsagePlansUsagePlanCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.entitlements"></a>

```typescript
public readonly entitlements: DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsEntitlementsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayUsagePlansUsagePlanCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItems">DataOciApigatewayUsagePlansUsagePlanCollectionItems</a>

---


### DataOciApigatewayUsagePlansUsagePlanCollectionList <a name="DataOciApigatewayUsagePlansUsagePlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.get"></a>

```typescript
public get(index: number): DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference <a name="DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciApigatewayUsagePlans } from 'rhizo-co-terraform-provider-oci'

new dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection">DataOciApigatewayUsagePlansUsagePlanCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciApigatewayUsagePlansUsagePlanCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionItemsList">DataOciApigatewayUsagePlansUsagePlanCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApigatewayUsagePlansUsagePlanCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlans.DataOciApigatewayUsagePlansUsagePlanCollection">DataOciApigatewayUsagePlansUsagePlanCollection</a>

---



