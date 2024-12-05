# `dataOciWaasHttpRedirects` Submodule <a name="`dataOciWaasHttpRedirects` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasHttpRedirects <a name="DataOciWaasHttpRedirects" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects oci_waas_http_redirects}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirects(scope: Construct, id: string, config: DataOciWaasHttpRedirectsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig">DataOciWaasHttpRedirectsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig">DataOciWaasHttpRedirectsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetDisplayNames">resetDisplayNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetIds">resetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetStates">resetStates</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciWaasHttpRedirectsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]

---

##### `resetDisplayNames` <a name="resetDisplayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetDisplayNames"></a>

```typescript
public resetDisplayNames(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIds` <a name="resetIds" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetIds"></a>

```typescript
public resetIds(): void
```

##### `resetStates` <a name="resetStates" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetStates"></a>

```typescript
public resetStates(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaasHttpRedirects resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isConstruct"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformElement"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformDataSource"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWaasHttpRedirects resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaasHttpRedirects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaasHttpRedirects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasHttpRedirects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList">DataOciWaasHttpRedirectsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.httpRedirects">httpRedirects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList">DataOciWaasHttpRedirectsHttpRedirectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.displayNamesInput">displayNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.idsInput">idsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.statesInput">statesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.displayNames">displayNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.states">states</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.filter"></a>

```typescript
public readonly filter: DataOciWaasHttpRedirectsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList">DataOciWaasHttpRedirectsFilterList</a>

---

##### `httpRedirects`<sup>Required</sup> <a name="httpRedirects" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.httpRedirects"></a>

```typescript
public readonly httpRedirects: DataOciWaasHttpRedirectsHttpRedirectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList">DataOciWaasHttpRedirectsHttpRedirectsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNamesInput`<sup>Optional</sup> <a name="displayNamesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.displayNamesInput"></a>

```typescript
public readonly displayNamesInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciWaasHttpRedirectsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idsInput`<sup>Optional</sup> <a name="idsInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.idsInput"></a>

```typescript
public readonly idsInput: string[];
```

- *Type:* string[]

---

##### `statesInput`<sup>Optional</sup> <a name="statesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.statesInput"></a>

```typescript
public readonly statesInput: string[];
```

- *Type:* string[]

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayNames`<sup>Required</sup> <a name="displayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `states`<sup>Required</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.states"></a>

```typescript
public readonly states: string[];
```

- *Type:* string[]

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirects.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasHttpRedirectsConfig <a name="DataOciWaasHttpRedirectsConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasHttpRedirectsConfig: dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#compartment_id DataOciWaasHttpRedirects#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.displayNames">displayNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#display_names DataOciWaasHttpRedirects#display_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#id DataOciWaasHttpRedirects#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.ids">ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#ids DataOciWaasHttpRedirects#ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.states">states</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#states DataOciWaasHttpRedirects#states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#time_created_greater_than_or_equal_to DataOciWaasHttpRedirects#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#time_created_less_than DataOciWaasHttpRedirects#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#compartment_id DataOciWaasHttpRedirects#compartment_id}.

---

##### `displayNames`<sup>Optional</sup> <a name="displayNames" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.displayNames"></a>

```typescript
public readonly displayNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#display_names DataOciWaasHttpRedirects#display_names}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciWaasHttpRedirectsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#filter DataOciWaasHttpRedirects#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#id DataOciWaasHttpRedirects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#ids DataOciWaasHttpRedirects#ids}.

---

##### `states`<sup>Optional</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.states"></a>

```typescript
public readonly states: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#states DataOciWaasHttpRedirects#states}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#time_created_greater_than_or_equal_to DataOciWaasHttpRedirects#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#time_created_less_than DataOciWaasHttpRedirects#time_created_less_than}.

---

### DataOciWaasHttpRedirectsFilter <a name="DataOciWaasHttpRedirectsFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasHttpRedirectsFilter: dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#name DataOciWaasHttpRedirects#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#values DataOciWaasHttpRedirects#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#regex DataOciWaasHttpRedirects#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#name DataOciWaasHttpRedirects#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#values DataOciWaasHttpRedirects#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_http_redirects#regex DataOciWaasHttpRedirects#regex}.

---

### DataOciWaasHttpRedirectsHttpRedirects <a name="DataOciWaasHttpRedirectsHttpRedirects" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirects.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasHttpRedirectsHttpRedirects: dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirects = { ... }
```


### DataOciWaasHttpRedirectsHttpRedirectsTarget <a name="DataOciWaasHttpRedirectsHttpRedirectsTarget" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTarget.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

const dataOciWaasHttpRedirectsHttpRedirectsTarget: dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTarget = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasHttpRedirectsFilterList <a name="DataOciWaasHttpRedirectsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.get"></a>

```typescript
public get(index: number): DataOciWaasHttpRedirectsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWaasHttpRedirectsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>[]

---


### DataOciWaasHttpRedirectsFilterOutputReference <a name="DataOciWaasHttpRedirectsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWaasHttpRedirectsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsFilter">DataOciWaasHttpRedirectsFilter</a>

---


### DataOciWaasHttpRedirectsHttpRedirectsList <a name="DataOciWaasHttpRedirectsHttpRedirectsList" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.get"></a>

```typescript
public get(index: number): DataOciWaasHttpRedirectsHttpRedirectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasHttpRedirectsHttpRedirectsOutputReference <a name="DataOciWaasHttpRedirectsHttpRedirectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList">DataOciWaasHttpRedirectsHttpRedirectsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirects">DataOciWaasHttpRedirectsHttpRedirects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.target"></a>

```typescript
public readonly target: DataOciWaasHttpRedirectsHttpRedirectsTargetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList">DataOciWaasHttpRedirectsHttpRedirectsTargetList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasHttpRedirectsHttpRedirects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirects">DataOciWaasHttpRedirectsHttpRedirects</a>

---


### DataOciWaasHttpRedirectsHttpRedirectsTargetList <a name="DataOciWaasHttpRedirectsHttpRedirectsTargetList" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.get"></a>

```typescript
public get(index: number): DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference <a name="DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer"></a>

```typescript
import { dataOciWaasHttpRedirects } from 'rhizo-co-terraform-provider-oci'

new dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTarget">DataOciWaasHttpRedirectsHttpRedirectsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaasHttpRedirectsHttpRedirectsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasHttpRedirects.DataOciWaasHttpRedirectsHttpRedirectsTarget">DataOciWaasHttpRedirectsHttpRedirectsTarget</a>

---



