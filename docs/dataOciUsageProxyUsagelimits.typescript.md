# `dataOciUsageProxyUsagelimits` Submodule <a name="`dataOciUsageProxyUsagelimits` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxyUsagelimits <a name="DataOciUsageProxyUsagelimits" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits oci_usage_proxy_usagelimits}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits(scope: Construct, id: string, config: DataOciUsageProxyUsagelimitsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig">DataOciUsageProxyUsagelimitsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig">DataOciUsageProxyUsagelimitsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetLimitType">resetLimitType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetServiceType">resetServiceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciUsageProxyUsagelimitsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimitType` <a name="resetLimitType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetLimitType"></a>

```typescript
public resetLimitType(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetServiceType` <a name="resetServiceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciUsageProxyUsagelimits resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciUsageProxyUsagelimits resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciUsageProxyUsagelimits to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciUsageProxyUsagelimits that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxyUsagelimits to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList">DataOciUsageProxyUsagelimitsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.usageLimitCollection">usageLimitCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList">DataOciUsageProxyUsagelimitsUsageLimitCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitTypeInput">limitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitType">limitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filter"></a>

```typescript
public readonly filter: DataOciUsageProxyUsagelimitsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList">DataOciUsageProxyUsagelimitsFilterList</a>

---

##### `usageLimitCollection`<sup>Required</sup> <a name="usageLimitCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.usageLimitCollection"></a>

```typescript
public readonly usageLimitCollection: DataOciUsageProxyUsagelimitsUsageLimitCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList">DataOciUsageProxyUsagelimitsUsageLimitCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciUsageProxyUsagelimitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitTypeInput"></a>

```typescript
public readonly limitTypeInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimits.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxyUsagelimitsConfig <a name="DataOciUsageProxyUsagelimitsConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxyUsagelimitsConfig: dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#compartment_id DataOciUsageProxyUsagelimits#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#subscription_id DataOciUsageProxyUsagelimits#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#id DataOciUsageProxyUsagelimits#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.limitType">limitType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#limit_type DataOciUsageProxyUsagelimits#limit_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#resource_type DataOciUsageProxyUsagelimits#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#service_type DataOciUsageProxyUsagelimits#service_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#compartment_id DataOciUsageProxyUsagelimits#compartment_id}.

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#subscription_id DataOciUsageProxyUsagelimits#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciUsageProxyUsagelimitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#filter DataOciUsageProxyUsagelimits#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#id DataOciUsageProxyUsagelimits#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limitType`<sup>Optional</sup> <a name="limitType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#limit_type DataOciUsageProxyUsagelimits#limit_type}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#resource_type DataOciUsageProxyUsagelimits#resource_type}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsConfig.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#service_type DataOciUsageProxyUsagelimits#service_type}.

---

### DataOciUsageProxyUsagelimitsFilter <a name="DataOciUsageProxyUsagelimitsFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxyUsagelimitsFilter: dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#name DataOciUsageProxyUsagelimits#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#values DataOciUsageProxyUsagelimits#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#regex DataOciUsageProxyUsagelimits#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#name DataOciUsageProxyUsagelimits#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#values DataOciUsageProxyUsagelimits#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_usagelimits#regex DataOciUsageProxyUsagelimits#regex}.

---

### DataOciUsageProxyUsagelimitsUsageLimitCollection <a name="DataOciUsageProxyUsagelimitsUsageLimitCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxyUsagelimitsUsageLimitCollection: dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection = { ... }
```


### DataOciUsageProxyUsagelimitsUsageLimitCollectionItems <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

const dataOciUsageProxyUsagelimitsUsageLimitCollectionItems: dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxyUsagelimitsFilterList <a name="DataOciUsageProxyUsagelimitsFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.get"></a>

```typescript
public get(index: number): DataOciUsageProxyUsagelimitsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciUsageProxyUsagelimitsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>[]

---


### DataOciUsageProxyUsagelimitsFilterOutputReference <a name="DataOciUsageProxyUsagelimitsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciUsageProxyUsagelimitsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsFilter">DataOciUsageProxyUsagelimitsFilter</a>

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.alertLevel">alertLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limit">limit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limitType">limitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.maxHardLimit">maxHardLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.modifiedBy">modifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.skuPartId">skuPartId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.valueType">valueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems">DataOciUsageProxyUsagelimitsUsageLimitCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `alertLevel`<sup>Required</sup> <a name="alertLevel" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.alertLevel"></a>

```typescript
public readonly alertLevel: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limit`<sup>Required</sup> <a name="limit" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limit"></a>

```typescript
public readonly limit: string;
```

- *Type:* string

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.limitType"></a>

```typescript
public readonly limitType: string;
```

- *Type:* string

---

##### `maxHardLimit`<sup>Required</sup> <a name="maxHardLimit" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.maxHardLimit"></a>

```typescript
public readonly maxHardLimit: string;
```

- *Type:* string

---

##### `modifiedBy`<sup>Required</sup> <a name="modifiedBy" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.modifiedBy"></a>

```typescript
public readonly modifiedBy: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `skuPartId`<sup>Required</sup> <a name="skuPartId" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.skuPartId"></a>

```typescript
public readonly skuPartId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.valueType"></a>

```typescript
public readonly valueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxyUsagelimitsUsageLimitCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItems">DataOciUsageProxyUsagelimitsUsageLimitCollectionItems</a>

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionList <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.get"></a>

```typescript
public get(index: number): DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference <a name="DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciUsageProxyUsagelimits } from 'rhizo-co-terraform-provider-oci'

new dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList">DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection">DataOciUsageProxyUsagelimitsUsageLimitCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList">DataOciUsageProxyUsagelimitsUsageLimitCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciUsageProxyUsagelimitsUsageLimitCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxyUsagelimits.DataOciUsageProxyUsagelimitsUsageLimitCollection">DataOciUsageProxyUsagelimitsUsageLimitCollection</a>

---



