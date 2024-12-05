# `dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule <a name="`dataOciDataSafeSecurityPolicyReportRoleGrantPaths` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPaths <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPaths" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths oci_data_safe_security_policy_report_role_grant_paths}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths(scope: Construct, id: string, config: DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig">DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig">DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeSecurityPolicyReportRoleGrantPaths resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSecurityPolicyReportRoleGrantPaths that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSecurityPolicyReportRoleGrantPaths to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection">roleGrantPathCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput">grantedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput">granteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput">securityPolicyReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole">grantedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee">grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId">securityPolicyReportId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList</a>

---

##### `roleGrantPathCollection`<sup>Required</sup> <a name="roleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.roleGrantPathCollection"></a>

```typescript
public readonly roleGrantPathCollection: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]

---

##### `grantedRoleInput`<sup>Optional</sup> <a name="grantedRoleInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRoleInput"></a>

```typescript
public readonly grantedRoleInput: string;
```

- *Type:* string

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.granteeInput"></a>

```typescript
public readonly granteeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityPolicyReportIdInput`<sup>Optional</sup> <a name="securityPolicyReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportIdInput"></a>

```typescript
public readonly securityPolicyReportIdInput: string;
```

- *Type:* string

---

##### `grantedRole`<sup>Required</sup> <a name="grantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantedRole"></a>

```typescript
public readonly grantedRole: string;
```

- *Type:* string

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityPolicyReportId`<sup>Required</sup> <a name="securityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.securityPolicyReportId"></a>

```typescript
public readonly securityPolicyReportId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPaths.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig: dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole">grantedRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee">grantee</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId">securityPolicyReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `grantedRole`<sup>Required</sup> <a name="grantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantedRole"></a>

```typescript
public readonly grantedRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#granted_role DataOciDataSafeSecurityPolicyReportRoleGrantPaths#granted_role}.

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#grantee DataOciDataSafeSecurityPolicyReportRoleGrantPaths#grantee}.

---

##### `securityPolicyReportId`<sup>Required</sup> <a name="securityPolicyReportId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.securityPolicyReportId"></a>

```typescript
public readonly securityPolicyReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#security_policy_report_id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#security_policy_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#filter DataOciDataSafeSecurityPolicyReportRoleGrantPaths#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#id DataOciDataSafeSecurityPolicyReportRoleGrantPaths#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter: dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#name DataOciDataSafeSecurityPolicyReportRoleGrantPaths#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#values DataOciDataSafeSecurityPolicyReportRoleGrantPaths#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_security_policy_report_role_grant_paths#regex DataOciDataSafeSecurityPolicyReportRoleGrantPaths#regex}.

---

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection: dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection = { ... }
```


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems: dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>[]

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter">DataOciDataSafeSecurityPolicyReportRoleGrantPathsFilter</a>

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel">depthLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole">grantedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee">grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `depthLevel`<sup>Required</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.depthLevel"></a>

```typescript
public readonly depthLevel: number;
```

- *Type:* number

---

##### `grantedRole`<sup>Required</sup> <a name="grantedRole" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantedRole"></a>

```typescript
public readonly grantedRole: string;
```

- *Type:* string

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItems</a>

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference <a name="DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeSecurityPolicyReportRoleGrantPaths } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSecurityPolicyReportRoleGrantPaths.DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection">DataOciDataSafeSecurityPolicyReportRoleGrantPathsRoleGrantPathCollection</a>

---



